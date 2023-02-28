const productsDB = require("./productsController");
const { Products, User, Productinchart, Cart } = require("../db");
const { Sequelize, ARRAY } = require("sequelize");

async function getcartbyid(userid) {
  console.log("ENTRANDO A FUNCION GET_CARD_BY_ID EN CONTROLLER");
  console.log("LAS VARIABLES SON");
  console.log(userid);
  //DEVOLVER EL CARRITO DE UN USER
  let response = await Productinchart.findAll({
    where: {
      CartId: userid,
    },
  });
  return response;
}

async function deleteallproducts(userid) {
  console.log("ENTRANDO A FUNCION DELETE_ALL EN CONTROLLER");
  console.log("LAS VARIABLES SON");
  console.log(userid);

  //BORRAR TODOS LOS PRODUCTINCHART DE UN CARRITO
  let res = await Productinchart.destroy({
    where: {
      CartId: userid,
    },
  });
  return res;
}
async function deleteproduct(userid, idproduct, quantity) {
  console.log("ENTRANDO A FUNCION DELETE EN CONTROLLER");
  console.log("LAS VARIABLES SON");
  console.log(userid);
  console.log(idproduct);
  console.log(quantity);
  //ELIMINAR EL PRODUCTO
  let res = await Productinchart.destroy({
    where: {
      idproduct: idproduct,
      CartId: userid,
    },
  });
  return res;
}

async function updateproduct(userid, idproduct, quantity) {
  console.log("ENTRANDO A FUNCION UPDATE EN CONTROLLER");
  console.log("LAS VARIABLES SON");
  console.log(userid);
  console.log(idproduct);
  console.log(quantity);
  //ACTUALIZAR EL PRODUCTO
  let response = await Productinchart.update(
    { quantity: quantity },
    {
      where: {
        idproduct: idproduct,
        CartId: userid,
      },
    }
  );
  return response;
}
async function addproduct(userid, idproduct, quantity) {
  console.log("ENTRANDO A FUNCION ADDPRODUCT EN CONTROLLER");
  console.log("LAS VARIABLES SON");
  console.log(userid);
  console.log(idproduct);
  console.log(quantity);
  //CREAR UN PRODUCT IN CHART
  let newid = await Productinchart.count();
  newid++;
  let newproduct = await Productinchart.create({
    id: newid,
    idproduct: idproduct,
    quantity: quantity,
  })
  //VINCULAR PRODUCT IN CHART AL USER
  let user = await Cart.findByPk(userid); //TRAIGO AL USER PARA TENERLO EN UNA VARIABLE USABLE
  console.log("USER EN ADD PRODUCT ES...")
  console.log(user)
  let vinculation = await user.addProductinchart(newproduct); //VINCULO O AGREGO UN PRODUCT CHART AL USUARIO
  console.log(await user.getProductincharts());
  return vinculation;
}
module.exports = {
  addproduct,
  updateproduct,
  deleteproduct,
  deleteallproducts,
  getcartbyid,
};
