const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "products",
    {
      id: {
        type: DataTypes.INTEGER, // genera un numero al azar
        allowNull: false, // valor requerido
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      namedisplay: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      imageurl: {
        type: DataTypes.TEXT,
      },

      trademark: {
        type: DataTypes.TEXT,
        //   ([
        //   "asus",
        //   "Thermaltake",
        //   "Deepcool",
        //   "Gamemax",
        //   "Redragon",
        //   "Corsair",
        //   "Seasonic",
        //   "BeQuiet",
        //   "Mercusys",
        //   "TP-Link",
        //   "Kaze",
        // ]),
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      // reviews: {
      //   type: DataTypes.TEXT,
      // },

      disabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,

      },
        stock: {
          type: DataTypes.INTEGER,
          defaultValue: 10
        }
      

      // reviews: {
      //   type: DataTypes.ARRAY(DataTypes.STRING),
      //   defaultValue: false,
      // },

      // reviewss: {
      //   //text: "Super bueno el produto",
      //   //rate: 4 // del 1 al 5 para que concuerde con las estrellitas de Carol
      // }
    },
    {
      timestamps: false,
    }
  );
};
