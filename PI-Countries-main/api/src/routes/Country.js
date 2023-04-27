const { Router } = require("express");
const { getAllCountries, getCountryById } = require("../controllers/countrycontrollers");
const router = Router();

//Ruta general de todos los paises o por Query
router.get("/countries", getAllCountries);

//Ruta a cada Pais segun ID
router.get("/countries/:idPais", getCountryById);

module.exports = router;