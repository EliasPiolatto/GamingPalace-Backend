const { Router } = require("express");
const router = Router();
const { addFavorite } = require("../controllers/favoriteController");
const { Favorite, User } = require("../db");

router.post("/:id", async (req, res) => {
  const userId = req.params.id;
  const productId = req.body.productId;

  Favorite.create({
    userId: userId,
    productId: productId,
  })
    .then((resp) => {
      return res.status(201).send(resp);
    })
    .catch((error) => {
      return res.status(404).send(error);
    });
});

module.exports = router;
