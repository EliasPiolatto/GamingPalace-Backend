const productsDB = require("./productsController");
const { Products, User, Productinchart, Cart} = require("../db");
const { Sequelize, ARRAY } = require('sequelize');

async function main () {
    
}
async function main3 (userid) {
    //TENDREMOS QUE RECIBIR EL ID DEL USER AL QUE AGREGAMOS PRODUCTO
    console.log("ENTRANDO A LA FUNCION MAIN")
       let response = await User.create({
    id: 1,
    name:"mateo",
email:"mate@gmail.com",
password:"dasdqw23",
image:"asdasda",
address:"dasdwqdqrqwr",
role:"vczxvcxzv"
})

// let varuser = {
//     id: 1,
//     name:"mateo",
// email:"mate@gmail.com",
// password:"dasdqw23",
// image:"asdasda",
// address:"dasdwqdqrqwr",
// role:"vczxvcxzv"
// }
varuser = await User.findByPk(1)


let product = await Productinchart.create({
    id: "1",
    quantity: "1"
})

let product2 = await Productinchart.create({
    id: "2",
    quantity: "1"
})
let response3 = await varuser.addProductinchart(product)
await varuser.addProductinchart(product2)
//console.log(response3)
//let response2 = await response.addProductinchart(product)

    console.log("USER CREADO ES...")
    //console.log(response3)

    console.log("LA CANTIDAD DE PRODUCT ES...")
    let obj = await User.findOne({
        include: Productinchart,
        where: {
            id: 1
        }
    })
    // let res = await Productinchart.destroy({
    //     where: {
    //         id: { [Sequelize.Op.eq]: "1"}
    //     }
    // })
   
    let quantity = await Productinchart.update({quantity: 6}, {
        where: {
            id: 2,
            // quantity: 1,
            // userId: 1
        }
    })
    let resposta = await varuser.getProductincharts()
    console.log(resposta)

}


module.exports = {
    main
   };
   

//    let response = await User.create({
//     id: 215,
//     "name":"mateo",
// "email":"mate@gmail.com",
// "password":"dasdqw23",
// "image":"asdasda",
// "address":"dasdwqdqrqwr",
// "role":"vczxvcxzv"
// })