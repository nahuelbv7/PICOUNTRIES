const { Router } = require('express');
const activitiesCtrl = require('../controllers/activitycontrollers.js');

const router = Router();

// Ruta para desplegar actividades
router.get('/activities', activitiesCtrl.getActivities);

// Ruta para postear actividades
router.post('/activities', activitiesCtrl.postActivity);

module.exports = router;