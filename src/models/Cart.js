const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "Cart",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      // orderN:{
      //   type: DataTypes.INTEGER,
      //   autoIncrement: true,
      //   allowNull: false,
      //   primaryKey: true,
      // },

      // date:{
      // type: DataTypes.DATEONLY,
      // defaultValue: DataTypes.NOW
      // },
      // totalPrice: {
      //   type: DataTypes.FLOAT,

      // },
      // state: {
      //   type: DataTypes.ENUM,
      //   values: ['created', 'processing', 'cancelled', 'completed', 'delivered','recived'],
      //   defaultValue: 'created',

      // },
      // trackingNumber: {
      //   type: DataTypes.STRING,

      //   defaultValue: 'none'
      // },
      // delivery: {
      //   type: DataTypes.STRING,

      //   defaultValue: "no",
      // },
      // productsid: {
      //   type: DataTypes.ARRAY(DataTypes.INTEGER),
      //   //type: DataTypes.
      // }
    },
    {
      timestamps: false,
      createdAt: false,
    }
  );
};
