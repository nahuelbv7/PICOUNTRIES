const axios = require("axios");
const { Op } = require("sequelize");
const { Country, Activity } = require("../db.js");

//trae los paises de la API
const getApiInfo = async () => {
	// Hacemos una petición a la API
	const response = await axios.get("https://restcountries.com/v3/all");

	const map = response.data.map((e) => {
		// Mapeamos la respuesta de la API a un objeto que represente cada país
		const country = {
			id: e.cca3,
			name: e.name.common,
			flag: e.flags[1],
			continent: e.continents[0],
			capital: e.capital != null ? e.capital[0] : "No data",
			subregion: e.subregion,
			area: e.area,
			poblation: e.population,
		};
		return country;
	});
	// Retornamos el array de países
	return map;
};

// Función asincrónica que carga los países en la base de datos
const countriesToDb = async () => {
	try {
		// Buscamos si ya existen países en la base de datos
		const countries = await Country.findAll();
		// Si no hay países en la base de datos, cargamos los datos de la API en la base de datos
		if (!countries.length) {
			const array = await getApiInfo();
			await Country.bulkCreate(array);
		}
	} catch (error) {
		console.log(error);
	}
};

// Controlador de la ruta GET /countries
const getAllCountries = async (req, res) => {
	// Cargamos los países en la base de datos antes de hacer la consulta
	await countriesToDb();

	// Obtenemos el parámetro name de la consulta
	const name = req.query.name;
	
	try {
		if (!name) {
		// Si no se especifica el nombre de un país, obtenemos todos los países de la base de datos
			const countries = await Country.findAll({
				include: [
					{
						model: Activity,
						attributes: ["name", "difficulty", "duration", "season"],
						through: { attributes: [] },
					},
				],
			});

			// Si encontramos países, los enviamos como respuesta
			if (countries) {
				return res.status(200).json(countries);
			} else {
				return res.status(404).send("No se encontró paises");
			}
		} else {
			// Si se especifica el nombre de un país, buscamos todos los países que coincidan con el nombre
			const country = await Country.findAll({
				where: {
					name: { [Op.substring]: name },
				},
				include: [
					{
						model: Activity,

						through: { attributes: [] },
					},
				],
			});
			// Si encontramos el país, lo enviamos como respuesta
			if (country) {
				return res.status(200).json(country);
			} else {
				return res.status(404).send("País no encontrado");
			}
		}
	} catch (error) {
		console.log(error);
	}
};

// Controlador de la ruta GET /countries/:idPais
const getCountryById = async (req, res) => {
    const idPais = req.params.idPais;

    try {
        const country = await Country.findOne({
            where: {
                id: idPais.toUpperCase(),
            },
            include: [ 	// Incluye información de la relación con la tabla "Activity"
                {
                    model: Activity,
                    attributes: ["name", "difficulty", "duration", "season"],
                    through: { attributes: [] },	
                },
            ],
        });
        if (country) {
            return res.status(200).json(country);
        } else {
            return res.status(404).send("País no encontrado");
        }
    } catch (error) {
        console.log(error);
    }
};


const getCountryByName = async (req, res) => {
	const { name } = req.params;
	const countries = await Country.findAll({
	  where: {
		name: {
		  [Op.like]: name,
		},
	  },
	});
  
	if (countries.length > 0) {
	  return res.status(200).json(countries);
	} else {
	  return res.status(404).send("País no encontrado");
	}
  };



module.exports = {
    getAllCountries,
    getCountryById,
	getCountryByName}