const { Router } = require("express");
const { getCategory } = require("../controllers/categoriesController");
const router = Router();

console.log("ENTRANDO A CATEGORY");
router.get("/", async (req, res) => {
  try {
    const info = await getCategory();
    res.status(201).send(info);
  } catch (error) {
    res.status(404).send("Error");
  }
});

module.exports = router;
