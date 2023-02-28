const { Products, Category } = require("../db"); //database
const { Router } = require("express");
const router = Router();
const { Sequelize, ARRAY, DatabaseError } = require('sequelize');
const { getcartbyid } = require('../controllers/cart')

router.get('/:userid', async (req, res) => { //RECIBE UN ID DE USUARIO POR PARAMS
    console.log("ENTRANDO A ROUTER.POST GET_CART_BY_ID")
    console.log("body es...")
    console.log(req.params)
    const {userid} = req.params
    try {
        let response = await getcartbyid(userid)
        res.status(201).send(response)
    } catch (error) {
        res.status(404).send(error.message)
    }
})
module.exports = router;