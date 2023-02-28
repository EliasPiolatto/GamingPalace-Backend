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

    await Favorite.save(deletee)

    res.status(201).send('favorito eliminado');

  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;