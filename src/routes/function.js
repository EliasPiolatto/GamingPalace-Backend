const { Products, Category } = require("../db"); //database
const { Router } = require("express");
const router = Router();
const { Sequelize, ARRAY, DatabaseError } = require('sequelize');

async function ordernamedown (array) { //ESTO ES ORDEN DE NAME EMPEZANDO POR LA z
  console.log('selected order is..Alphabetic dESC.')
        //do the order logic
  let arraytoorder = []
  arraytoorder = array
         let result = arraytoorder.sort(function compare (a, b) {
            if (a['name'] > b['name'] ) {return -1}
              if (b['name'] > a['name'] ){return 1}
              if (b['name'] == a['name'] ){return 0} 
            })
 return result
}

async function ordernameup (array) { //ESTO ES ORDEN DE NAME EMPEZANDO POR LA A
  console.log('selected order is..Alphabetic Ascen.')
        //do the order logic
  let arraytoorder = []
  arraytoorder = array
         let result = arraytoorder.sort(function compare (a, b) {
            if (a['name'] > b['name'] ) {return 1}
              if (b['name'] > a['name'] ){return -1}
              if (b['name'] == a['name'] ){return 0} 
            })
 return result
}

async function orderpriceup (array) { //ESTO ES ORDEN DE PRECIOS de mayor a menor
  // console.log('selected order is..Price Ascen.')
  // console.log(array[0])
  // console.log(array[1])
  // console.log(array[2])
  //do the order logic
  let arraytoorder = []
  arraytoorder = array
  let result = arraytoorder.sort(function compare (a, b) {
  if (a['price'] > b['price'] ) {return -1}
if (b['price'] > a['price'] ){return 1}
  if (b['price'] == a['price'] ){return 0} 
   })
return result
}

async function orderpricedown (array) { //ESTO ES ORDEN DE PRECIOS de menor a mayor
  console.log('selected order is..Price Desc.')
  console.log(array[0])
  console.log(array[1])
  console.log(array[2])
  //do the order logic
  let arraytoorder = []
  arraytoorder = array
  let result = arraytoorder.sort(function compare (a, b) {
  if (a['price'] > b['price'] ) {return 1}
if (b['price'] > a['price'] ){return -1}
  if (b['price'] == a['price'] ){return 0} 
   })
return result
}

async function filtera (word, array) { //ESTO ES FILTRO DE MARCAS
  // console.log('ENTRANDO A FILTER_A')
  // console.log(word)
  // console.log(array)
  //chequear si los parámetros son correctos
  if (!word) {return "FilterA: Debe haber un primer parámetro con el valor del filtro marca a filtrar"}
  if (!Array.isArray(array)){return "El segundo parámetro debe ser un array para filtrar"}
//primero si word === "empty", es decir, filtro desactivado, devolver el array tal como está.
if (word === "empty") {return array}
//segundo si hay una palabra para filtrar, filtrar la marca
let result
let arraytofilter = []
arraytofilter = array
result = arraytofilter.filter( (x) => x.dataValues.trademark === word)
return result
}

async function filterb (word, array){ //ESTO ES FILTRO DE CATEGORIAS
  // console.log('ENTRANDO A FILTER_B')
  // console.log(word)
  // console.log(array)
  //chequear si los parámetros son correctos
  if (!word) {return "FilterB: Debe haber un primer parámetro con el valor del filtro categoria a filtrar"}
  if (!Array.isArray(array)){return "El segundo parámetro debe ser un array para filtrar"}
//primero si word=== "empty", es decir, filtro desactivado, devolver el array tal como está.
if (word === "empty") {return array}
//segundo si hay una palabra para filtrar, filtrar la marca
let result
let arraytofilter = []
arraytofilter = array
result = arraytofilter.filter( (x) => x.dataValues.category === word)
return result
}




async function searchresults (word) {
    console.log('Search results!!!')
    // console.log(products) 
  const wordss = word.toLowerCase()
    const productslist = await Products.findAll({
      where: {
        name:  { [Sequelize.Op.like]: `%${wordss}%`},
      },
    });
    console.log('SALIENDO DE SEARCHRESULTS')
    return productslist;
}
///////////GET ARRAY
async function getarray (word, filter1, filter2, order) {
  //chequear si los parámetros son correctos
//primero resultados de la busqueda
let results = await searchresults(word)
//segundo hacer primerfiltro (filter1) 
console.log('INVOCANDO FILTER A CON RESULTS EN...')
results = await filtera(filter1, results)
results = await filterb (filter2, results)
//orden elegir el orden
switch (order) {
  case 'namedown':
    results = await ordernamedown(results)
  break
  case 'nameup':
    results = await ordernameup(results)
  break
  case 'priceup':
    results = await orderpriceup(results)
  break
  case 'pricedown':
    results = await orderpricedown(results)
  break
  case 'empty':
    results = results //no hace nada
  break
  default:
    return "Debe elegir una variable para el orden"
}
//results = await ordernamedown(results)
return results
}//////////////END GETARRAY

    
router.get("/", async (req, res) => {
    const { word,  filter1, filter2, order} = req.body
    console.log ('BODY ES')
    console.log (req.body)
    try {
        let response = await getarray(word, filter1, filter2, order)
        res.status(201).send(response);
      
    } catch (error) {
      console.log(error)
      res.status(404).send(error);
    }
  });
// module.exports = {searchresults}

module.exports = router;

