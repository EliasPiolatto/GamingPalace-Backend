const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Historicproduct",
    {
      id: {
        type: DataTypes.INTEGER, // genera un numero al azar
        allowNull: false, // valor requerido
        primaryKey: true,
        valueDefault: 1,
        autoIncrement: true,
      },
      idproduct: {
        type: DataTypes.INTEGER,
      },
      // quantity: {
      //   type: DataTypes.INTEGER,
      //   //allowNull: false,
      // },
      userid: {
        type: DataTypes.INTEGER,
      },
      month: {
        type: DataTypes.INTEGER,
      },
      year: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: true,
      createdAt: true,
    }
  );
};
