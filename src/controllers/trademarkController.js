const productsDB = require("./productsController");
const { Products } = require("../db");

const getTrademark = async () => {
  try {
    const infoDB = await Products.findAll();
    console.log(infoDB);
    const data = infoDB;
    let infoTrademark = data?.map((product) => {
      // console.log(product.dataValues.category);
      return product.dataValues.trademark;
    });
    let set1 = new Set();
    infoTrademark.map((valor) => {
      set1.add(valor);
    });
    let arrayCategory = Array.from(set1);
    console.log(arrayCategory);
    return arrayCategory;
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = {
  getTrademark,
};
