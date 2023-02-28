
const { Router } = require("express");
const {
  postNewUser,
  userToDB,
  validation,
  login,
  updateInfo,
  userbymail
} = require("../controllers/userController");
const router = Router();

router.post("/", async(req,res) => {
    console.log("ENTRANDO A RUTA GET_USER_BY_MAIL")
    console.log("BODY  ES...")
    console.log(req.body)
    const {email} = req.body
    try {
        let response = await userbymail(email)
        res.status(200).send(response)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = router;