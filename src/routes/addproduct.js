const { Products, Category } = require("../db"); //database
const { Router } = require("express");
const router = Router();
const { Sequelize, ARRAY, DatabaseError } = require('sequelize');
const { addproduct } = require('../controllers/cart')

router.post('/', async (req, res) => {
    console.log("ENTRANDO A ROUTER.POST ADDPRODUCT")
    console.log("body es...")
    console.log(req.body)
    const {userid, idproduct, quantity} = req.body
    try {
        //let response = await addproduct(userid, idproduct, quantity)
        addproduct(userid, idproduct, quantity).then ((x) => {
            res.status(201).send("Producto agregado")
        })
        
    } catch (error) {
        res.status(404).send(error.message)
    }
})


module.exports = router;