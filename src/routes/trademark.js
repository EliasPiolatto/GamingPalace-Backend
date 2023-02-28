const { Router } = require("express");
const { getTrademark } = require("../controllers/trademarkController");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const info = await getTrademark();
    res.status(201).send(info);
  } catch (error) {
    res.status(404).send("Error");
  }
});

module.exports = router;
