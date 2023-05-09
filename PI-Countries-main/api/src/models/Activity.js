// const { DataTypes } = require('sequelize');

// module.exports = (sequelize) => {
//      sequelize.define("Activity", {
//         id: {
//             type: DataTypes.UUID,
//             defaultValue: DataTypes.UUIDV4,
//             allowNull: false,
//             primaryKey: true,
//             validate: {
//                 min: 1,
//                 max: 1000
//               }
//           },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         difficulty: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//           },
//         duration: {
//             type: DataTypes.FLOAT,
//             allowNull: false,
//         },
//         season: {
//             type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
//             allowNull: false,
//         },
//     })

// }



const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
     sequelize.define("Activity", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        duration: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        season: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false,
        },
    })
}



