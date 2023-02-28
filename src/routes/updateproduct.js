const { Products, Category } = require("../db"); //database
const { Router } = require("express");
const router = Router();
const { Sequelize, ARRAY, DatabaseError } = require('sequelize');
const { updateproduct } = require('../controllers/cart')

router.post('/', async (req, res) => {
    console.log("ENTRANDO A ROUTER.POST UPDATE_PRODUCT")
    console.log("body es...")
    console.log(req.body)
    const {userid, idproduct, quantity} = req.body
    try {
        //let responseupdate = await updateproduct(userid, idproduct, quantity)
        updateproduct(userid, idproduct, quantity)
        .then( (x) => {
            console.log("ROUTER UPDATE PRODUCT RESPONSE ES...")
            //console.log(responseupdate)
            console.log(x)
            res.status(201).send(x)
        })
       
        
        console.log("SALIENDO DE ROUTER UPDATE PRODUCTS")
    } catch (error) {
        res.status(404).send(error.message)
    }
})


module.exports = router;