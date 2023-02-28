const { Products, Category } = require("../db"); //database
const { Router } = require("express");
const router = Router();
const { Sequelize, ARRAY, DatabaseError } = require("sequelize");
//const { changeproduct } = require('../controllers/changeproduct')
const { changeproduct2, changestock } = require("../controllers/changeproduct");

//(idproduct, productname, namedisplay, price, imageurl, trademark, category, description, disabled) por body
router.post("/", async (req, res) => {
  console.log("ENTRANDO A ROUTER.POST CHANGE_PRODUCT");
  console.log("body es...");
  console.log(req.body);
  const {
    idproduct,
    productname,
    namedisplay,
    price,
    imageurl,
    trademark,
    category,
    description,
    disabled,
    stock,
  } = req.body;
  try {
    //let response = await addproduct(userid, idproduct, quantity)
    changeproduct2(
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
    ).then((x) => {
      res.status(201).send(x);
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/stock", async (req, res) => {
  try {
    await changestock(req.body);

    //await Favorite.save(deletee);

    res.status(201).send("Updated stock");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
