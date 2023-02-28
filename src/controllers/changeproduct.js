const productsDB = require("./productsController");
const { Products, User, Productinchart, Cart } = require("../db");
const { Sequelize, ARRAY } = require("sequelize");

async function changeproduct2(
  idproduct,
  productname,
  namedisplay,
  price,
  imageurl,
  trademark,
  category,
  description,
  disabled,
  stock
) {
  console.log("ENTRANDO A FUNCION CAMBIAR_PRODUCT EN CONTROLLER");
  console.log("LAS VARIABLES SON");
  console.log(idproduct);
  console.log(productname);
  //ACTUALIZAR EL PRODUCTO
  Products.update(
    {
      name: productname,
      namedisplay: namedisplay,
      price: price,
      imageurl: imageurl,
      trademark: trademark,
      description: description,
      category: category,
      stock: stock,
      disabled: disabled,
    },
    {
      where: {
        id: idproduct,
      },
    }
  ).then((x) => {
    return x;
  });
}

// async function changestock(idproduct, stock) {
//   //ACTUALIZAR EL PRODUCTO
//   let changes = await Products.update(
//     {
//       stock: stock,
//     },
//     {
//       where: {
//         id: idproduct,
//       },
//     }
//   );
//   return changes;
// }

const changestock = async (data) => {
  for (let i = 0; i < data.length; i++) {
    await Products.update(
      {
        stock: data[i].stock,
      },
      {
        where: {
          id: data[i].idproduct,
        },
      }
    );
  }
};

module.exports = {
  changeproduct2,
  changestock,
};
