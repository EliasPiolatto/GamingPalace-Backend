const { Products, Category } = require("../db"); //database
const { Router } = require("express");
const router = Router();
const { Sequelize, ARRAY, DatabaseError } = require("sequelize");
const { deleteallproducts } = require("../controllers/cart");

router.post("/", async (req, res) => {
  console.log("ENTRANDO A ROUTER.POST DELETE_ALL_PRODUCTS");
  console.log("body es...");
  console.log(req.body);
  const { userid, idproduct, quantity } = req.body;
  try {
    let response = await deleteallproducts(userid);
    res.status(201).send("Delete all products");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
