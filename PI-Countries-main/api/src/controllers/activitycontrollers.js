const { Activity, Country } = require('../db.js');
const { Op } = require("sequelize");

// Controlador para obtener actividades
 const getActivities = async (req, res) => {
    try {
        const activities = await Activity.findAll();
        if (activities.length) {
            res.status(200).json(activities);
        } else {
            res.status(404).json("No se encontraron actividades");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

// Controlador para crear actividades
// const postActivity = async (req, res) => {
//     try {
//         //  Extraemos los datos de la solicitud
//         const { name, difficulty, duration, season, countries } = req.body;
//         res.status(200).json(name)
//         if (name && difficulty && duration && season && countries) {
//             const activity = await Activity.create({
//                 name,
//                 difficulty,
//                 duration,
//                 season
//             });
//             // Para cada país proporcionado en la solicitud
//             countries.forEach(async (id) => {
//                  // Busca el país correspondiente en la base de datos
//                 const country = await Country.findOne({
//                     where: { id: { [Op.iLike]: `%${id}%` } }
//                 });
//                 await country?.addActivity(activity);
//             });

//             res.status(201).send(activity);
//         } else {
//             res.status(400).json('Missing data');
//         }
//     } catch (error) {
//         res.status(500).json(error);
//     }
// }
const postActivity = async (req, res) => {
    try {
        //  Extraemos los datos de la solicitud
        const { name, difficulty, duration, season, countries } = req.body;
        if (name && difficulty && duration && season && countries) {
            const activity = await Activity.create({
                name,
                difficulty,
                duration,
                season
            });
            // Para cada país proporcionado en la solicitud
            countries.forEach(async (id) => {
                 // Busca el país correspondiente en la base de datos
                const country = await Country.findOne({
                    where: { id: { [Op.iLike]: `%${id}%` } }
                });
                await country?.addActivity(activity);
            });

            res.status(201).send(activity);
        } else {
            res.status(400).json('Missing data');
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = {
    getActivities,
    postActivity
};