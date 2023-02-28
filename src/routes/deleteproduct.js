const { Products, Category } = require("../db"); //database
const { Router } = require("express");
const router = Router();
const { Sequelize, ARRAY, DatabaseError } = require("sequelize");
const { deleteproduct } = require("../controllers/cart");

router.post("/", async (req, res) => {
  console.log("ENTRANDO A ROUTER.POST DELETE_PRODUCT");
  console.log("body es...");
  console.log(req.body);
  const { userid, idproduct, quantity } = req.body;
  try {
    //let responsedelete = await deleteproduct(userid, idproduct, quantity)
    deleteproduct(userid, idproduct, quantity).then((x) => {
      console.log("RESPONSEDELETE ES...");
      console.log(x);
      res.status(200).send("Producto borrado");
    });
    //res.status(201).send(responsedelete)
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
