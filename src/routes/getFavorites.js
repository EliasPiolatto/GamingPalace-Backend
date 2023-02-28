const { Router } = require("express");
const router = Router();
const { Favorite, User } = require("../db");
const getfavbyid = require("../controllers/favoriteController");

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    let response = await User.findAll({
      include: [
        {
          model: Favorite,
          where: {
            userId: userId,
          },
        },
      ],
    });
    res.status(201).send(response);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
