const { Router } = require("express");
const mercadopago = require("mercadopago");
const router = Router();
require("dotenv").config();

mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY });

router.post("/", (req, res) => {
  const prod = req.body;
  let preference = {
    items: [],
//
//
    back_urls: {
      success: "https://gaming-palace-frontend-aghgc53z6-eliaspiolatto.vercel.app/purchase-success" || "http://localhost:3000/purchase-success",
      failure: "https://gaming-palace-frontend-aghgc53z6-eliaspiolatto.vercel.app/home" || "http://localhost:3000/home",
      pending: "https://gaming-palace-frontend-eliaspiolatto.vercel.app/home" || "http://localhost:3000/home",
    },
    auto_return: "approved",
    binary_mode: true, //no permite un pending, pending sería pago en efectivo, ejemplo rapipago.
  };

  prod?.forEach((prod) => {
    preference.items.push({
      title: prod.title,
      currency_id: "USD",
      quantity: prod.quantity,
      price: prod.price,
      unit_price: prod.price,
    });
  });

  mercadopago.preferences
    .create(preference)
    .then((response) => res.status(201).send({ response }))
    .catch((error) => res.status(400).send({ error: error }));
});

router.get("/feedback", function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

module.exports = router;
