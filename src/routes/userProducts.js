const { Router } = require("express");
const { userProducts } = require("../controllers/userController");
const router = Router();

router.get("/:userid", async (req, res) => {
  console.log("ENTRANDO A userProducts EN ROUTES");
  const { userid } = req.params;
  try {
    let response;
    userProducts(userid).then((x) => {
      console.log("X ES...");
      console.log(x);
      response = x;
      res.status(200).send(response);
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
