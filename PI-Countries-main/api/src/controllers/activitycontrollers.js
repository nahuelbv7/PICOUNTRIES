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


const postActivity = async (req, res) => {
    try {

        //  Extraemos los datos de la solicitud
        const { name, difficulty, duration, choosenSeason, countries } = req.body;
        if (name && difficulty && duration && choosenSeason && countries) {
            const activity = await Activity.create({
                name: name,
                difficulty: difficulty,
                duration: duration,
                season: choosenSeason.join(", ")
            });
           
            // Para cada país proporcionado en la solicitud
           
            countries.forEach(async (countries) => {
                
                 // Busca el país correspondiente en la base de datos
                const country = await Country.findOne({
                    where: { id: { [Op.iLike]: `%${countries}%` } }
                });
                await country?.addActivity(activity);
            });

            res.status(201).json(activity);
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