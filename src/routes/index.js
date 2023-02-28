const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const products = require("./products");

const tryfunction2 = require("./function2");

const categories = require("./categories");
const mercadopago = require("./mercadopago");
const trademark = require("./trademark");
const review = require("./review");
const users = require("./user");
const updateUser = require("./updateUser");
const postchart = require("./postchart");

const nodemailer = require("./nodemailer");

const router = Router();
const addproduct = require("./addproduct");
const updateproduct = require("./updateproduct");
const deleteproduct = require("./deleteproduct");
const deleteallproducts = require("./deleteallproducts");
const getcartbyid = require("./getcartbyid");
const getuserbymail = require("./userbymail");
const deletefavorite = require("./deletefavorite2");
const addfavorite = require("./addFavorites");
const getfavorites = require("./getFavorites");
const deleteallfav = require("./deleteAllFavorite");
const changeproduct3 = require("./changeproduct");

const registerpurchaseroute = require("./Statistics");
const userProducts = require("./userProducts");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//STATISTICS
router.use("/stats", registerpurchaseroute);
router.use("/userProducts", userProducts);
//UPDATE PRODUCT
//(idproduct, productname, namedisplay, price, imageurl, trademark, category, description, disabled) por body
router.use("/change", changeproduct3);
//CART changeproduct

//CART
router.use("/deleteallproducts", deleteallproducts);
router.use("/deleteproduct", deleteproduct);
router.use("/updateproduct", updateproduct);
router.use("/addproduct", addproduct);
router.use("/getcartbyid", getcartbyid);

router.use("/postchart", postchart);
router.use("/getuserbymail", getuserbymail);
router.use("/deletefav", deletefavorite);
router.use("/nmailer", nodemailer);
router.use("/function2", tryfunction2);
router.use("/users", users);
router.use("/updateuser", updateUser);

router.use("/categories", categories);
router.use("/products", products);
//router.use("/function", tryfunction);

router.use("/trademark", trademark);
router.use("/favorite", addfavorite);
router.use("/payment", mercadopago);
router.use("/review", review);

router.use("/favorite", addfavorite);
router.use("/deletefav", deletefavorite);
router.use("/getfavorites", getfavorites);
router.use("/deleteallfav", deleteallfav);

module.exports = router;
