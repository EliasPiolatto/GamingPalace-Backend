const { Products, Category } = require("../db"); //database
const { Router } = require("express");
const router = Router();
const { Sequelize, ARRAY, DatabaseError } = require('sequelize');
const {main} = require('../controllers/postchart')
//import {nmailer} from "../controllers/nodemailerController"

  

console.log ("ENTRANDO A POSTCHART.JS ")

router.post ("/", async (req, res) => {
    console.log ("entrando  POST CHART")
    //console.log(req.body)
    try {
        main()
        res.status(201).send("paso por ruta postchart try");
    } catch (error) {
        
        res.status(404).send(error.message);
    }
})

module.exports = router;