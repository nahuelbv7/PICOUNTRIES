const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Activity = sequelize.define("activity", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
            validate: {
                min: 1,
                max: 1000
              }
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
   /* Activity.associate = (models) => {
        Activity.belongsToMany(
           models.Country,
           {
              through: 'CountriesActivities',
              timestamps: false
           }
        );
     }*/
}








// Duración (en horas).
// Temporada (Verano, Otoño, Invierno o Primavera). *