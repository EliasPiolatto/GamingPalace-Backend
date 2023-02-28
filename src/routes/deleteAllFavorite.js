const { Router } = require("express");
const router = Router();
const { Favorite, User } = require("../db");

router.post("/", async (req, res) => {
  const userId = req.body.userId;

  try {
    const deletee = await Favorite.destroy({
      where: {
        userId: userId,
      },
    });

    //await Favorite.save(deletee);

    res.status(201).send("Product removed from favorites");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
