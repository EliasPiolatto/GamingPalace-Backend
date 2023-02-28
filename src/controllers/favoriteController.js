const { Favorite, User } = require("../db");

async function getfavbyid(userId) {
  console.log("ENTRANDO A FUNCION GET_CARD_BY_ID EN CONTROLLER");
  console.log("LAS VARIABLES SON");
  console.log(userid);
  //DEVOLVER EL CARRITO DE UN USER
  let response = await Favorite.findAll({
    where: {
      userId: userId,
    },
  });
  return response;
}

module.exports = {
  getfavbyid,
};
