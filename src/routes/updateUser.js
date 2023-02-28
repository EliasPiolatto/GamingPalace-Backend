const { Router } = require("express");
const { updateInfo } = require("../controllers/userController");
const router = Router();

router.post("/", async (req, res) => {
  console.log("ENTRANDO A RUTA PUT, el body es:");
  console.log(req.body);
  console.log("REQ ES:");
  console.log(req);
  const { id, name, email, password, image, address, role, verified } =
    req.body;
  try {
    let infoupdate = await updateInfo(
      id,
      name,
      email,
      password,
      image,
      address,
      role,
      verified
    );
    res.status(200).send(infoupdate);
  } catch (error) {
    console.log("ERROR");
    console.log(error);
    console.log("ERROR MESSAGE");
    console.log(error.message);
    res.status(404).send(error.message);
  }
});

module.exports = router;
