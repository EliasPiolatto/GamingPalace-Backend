const { Products, Category } = require("../db"); //database
const { Router } = require("express");
const router = Router();
const { Sequelize, ARRAY, DatabaseError } = require('sequelize');
//import {nmailer} from "../controllers/nodemailerController"
const {
    nmailer,
  
  } = require("../controllers/nodemailerController");
const Mail = require("nodemailer/lib/mailer");
const { post } = require("./products");
  

console.log ("entrand  a nodemailer.js")

router.post ("/", async (req, res) => {
    console.log ("entrando  POST DE  a nodemailer.js")
    console.log(req.body)
    try {
        let response = await nmailer(req.body)
        console.log("response del try catch es...")
        console.log(response)
        res.status(201).send(response);
    } catch (error) {
        console.log("Hay error...")
        console.log("TRy CATCH SPEAKING...")
        console.log(error.message)
        res.status(404).send(error.message);
    }
})

//DOCUMENTACIÓN

//EXPLICACIÓN DE CÓMO FUNCIONA LA RUTA Y DE CÓMO HACER UN POST CON FETCH (EXPLICADO AL FINAL ABAJO DE TODO)
//LA RUTA "/nmailer" es un POST que recibe por BODY cuatro variables:: 

// destiny: ACA VA LA O LAS DIRECCIONES DE EMAIL QUE VAN A RECIBIR EL Mail
// EJEMPLOS:
// SI ES UNA SOLA . . .
// destiny: "mimail@gmail.com"
// SI SON VARIAS . . . 
// destiny: "mail1@gmail.com, mail2@gmail.com, mail3@gmail.com"

// subject: ACÁ VA EL ASUNTO DEL EMAIL
// body: ACÁ VA EL TEXTO DEL Mail
// html: ACÁ VA EL CÓDIGO HTML DEL Mail. ESTO SE USA EN LOS CASOS EN LOS QUE QUEREMOS MANDAR UN Mail
// QUE PARECE UNA PÁGINA WEB Y TIENE ESTILOS, ETC. SI NO LO USAMOS PUEDE ESTAR VACIO

// ***ATENCIÓN: PUEDE UTILIZARSE AL MISMO TIEMPO body Y html.

// Ejemplo completo
// destiny:  "miMail@hotmail.com" 
// subject: "Asunto del Email"
// body: "Hola que tal"
// html: "<h1>Titulo muy lindo</h1>"

// ATENCION: destiny ES OBLIGATORIA, body y html PUEDE ESTAR VACIO, EJEMPLO : body: ""

// CÓMO HACER UN FETCH CON FORMATO "POST"
// fetch ('http://localhost:3001/nmailer', {
//       method: "POST",
//       body: JSON.stringify({
//             destiny:  "miMail@hotmail.com", //MAIL DE DESTINO, VARIABLE OBLIGATORIA
//             subject: "Asunto del Email", //ASUNTO DEL EMAIL, VARIABLE NO OBLIGATORIA
//             body: "Hola que tal", //TEXTO DEL MAIL, VARIABLE NO OBLIGATORIA
//             html: "<h1>Titulo muy lindo</h1>" // HTML DEL MAIL, VARIABLE NO OBLIGATORIA
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8" //ESTO VA ASÍ PARA QUE NO DE ERROR, POR EL FORMATO JSON
//   }
//     })
//     .then(response => response.json())
//     .then(json => {
//       console.log(json) //JSON SERÍA LA RESPUESTA DEL BACK
//     })

module.exports = router;