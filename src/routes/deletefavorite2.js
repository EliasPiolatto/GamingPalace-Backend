const { Router } = require("express");
const router = Router();
const { Favorite, User } = require("../db");

router.post("/", async (req, res) => {
  const userId = req.body.userId;
  const productId = req.body.productId;

  try {
    const deletee = await Favorite.destroy({
      where: {
        userId: userId,
        productId: productId,
      },
    });

    res.status(201).send("Product removed from favorites");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
