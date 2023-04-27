const { Activity, Country } = require('../db.js');
const { Op } = require("sequelize");

// Controlador para desplegar actividades
async function getActivities(req, res) {
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

// Controlador para postear actividades
async function postActivity(req, res) {
    try {
        const { name, difficulty, duration, season, countries } = req.body;
        if (name && difficulty && duration && season && countries) {
            const activity = await Activity.create({
                name,
                difficulty,
                duration,
                season
            });

            countries.forEach(async (id) => {
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
        res.status(500).json(error);
    }
}

module.exports = {
    getActivities,
    postActivity
};