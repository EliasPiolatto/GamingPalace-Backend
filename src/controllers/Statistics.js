const {
  User,
  Productinchart,
  Cart,
  Historiccart,
  Historicproduct,
} = require("../db");
const users = require("../utils/usersDB");

async function returnbydate(year, month) {
  console.log("ENTRANDO A returnbydate EN ROUTES");
  console.log("MES ES...");
  console.log(month);
  console.log("AÑO ES...");
  console.log(year);
  //FILTRAR EN SEQUELIZE LOS HISTORICPRODUCT QUE COINCIDAN CON ESA FECHA
  // let response
  // {
  //     where: {
  //         year: year,
  //         month: month
  //     }
  // }
  // Historicproduct.findAll().then((x) => {
  //     response = x
  //     return response
  // })
  let response = await Historicproduct.findAll({
    where: {
      year: year,
      month: month,
    },
  });
  console.log("historic products son...");
  console.log(response);
  return response;
}

async function returnbyyear(year) {
  console.log("ENTRANDO A returnbyyear EN ROUTES");

  console.log("AÑO ES...");
  console.log(year);
  let response = await Historicproduct.findAll({
    where: {
      year: year,
    },
  });
  console.log("historic products son...");
  console.log(response);
  return response;
}

async function returnbymonth(month) {
  console.log("ENTRANDO A returnbyyear EN ROUTES");

  console.log("AÑO ES...");
  console.log(month);
  let response = await Historicproduct.findAll({
    where: {
      month: month,
    },
  });
  console.log("historic products son...");
  console.log(response);
  return response;
}

async function allStatics() {
  let response = await Historicproduct.findAll();
  console.log("historic products son...");
  console.log(response);
  return response;
}

// async function allStaticsId(userid) {
//   let response = await Historicproduct.findAll({
//     where: {
//       userid: userid
//     }}
//   );
//   console.log("historic products son...");
//   console.log(response);
//   return response;
// }

async function registerpurchase(userid) {
  console.log("ENTRANDO A registerpurchase EN CONTROLLERS");
  console.log("USER ID ES...");
  console.log(userid);
  //TRAER CARRITO DEL USUARIO ENVIADO
  let usercart = await Cart.findByPk(userid);
  //TRAER LOS PRODUCTINCHART DE ESE USUARIO
  let productsinchart = await Productinchart.findAll({
    where: {
      CartId: userid,
    },
  });
  console.log("LOS PRODUCTS IN CHART DEL USERID SON...");
  console.log(productsinchart);
  //CREAR UN NUEVO HISTORICCART PARA PODER ASOCIARLE LOS HISTORICPRODUCT DESPUES
  let newhistoriccart = await Historiccart.create({
    id: id++,
    userid: userid,
  });
  console.log("EL NUEVO HISTORICCART ES...");
  console.log(newhistoriccart);
  //ITERAR LOS PRODUCTINCHART DEL CARRITO Y CREAR UN HISTORICPRODUCT POR CADA QUANTITY QUE HAYA EN CADA
  //PRODUCTINCHART DEL CART DEL USERID
  //ITERAR
  //DATA DE LA FECHA
  let thedate = new Date();
  let theyear = thedate.getFullYear();
  let themonth = thedate.getMonth();
  themonth++;
  //end test
  for (let i = 0; i < productsinchart.length; i++) {
    //ITERA LOS PRODUCT IN CHART
    for (let a = 0; a < productsinchart[i].dataValues.quantity; a++) {
      //ITERAR UNA VEZ POR CADA QUANTITY
      //TRAER LOS VALORES DEL PRODUCTO
      //CREAR UN HISTORICPRODUCT
      let historic = await Historicproduct.create({
        idproduct: productsinchart[i].dataValues.idproduct,
        userid: userid,
        month: themonth,
        year: theyear,
      });
      newhistoriccart.addHistoricproduct(historic); //ASOCIAR EL NUEVO HISTORICPRODUCT AL HISTORICCART CREADO
    } //FIN FOR QUE ITERA UNA VEZ POR CADA QUANTITY
  } //FIN FOR ITERA LOS PRODUCT IN CHART
  //ASOCIAR EL HISTORICCART AL USUARIO
  let usertoasociate = await User.findByPk(userid); //TRAERLO CON EL USERID QUE YA TENEMOS
  console.log("USER TO ASOCIATE ES...");
  console.log(usertoasociate);
  console.log("NEWHISTORICCART ES...");
  console.log(newhistoriccart);
  //  console.log()
  //  console.log()
  usertoasociate.addHistoriccart(newhistoriccart); //ASOCIAR EL HISTORICCART CREADO AL USER PASADO POR USERID
}

module.exports = {
  registerpurchase,
  returnbydate,
  returnbyyear,
  allStatics,
  returnbymonth,
};
