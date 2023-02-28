const { Router } = require("express");
const router = Router();
const { registerpurchase } = require("../controllers/Statistics");
const {
  returnbydate,
  returnbyyear,
  allStatics,
  returnbymonth,
} = require("../controllers/Statistics");

router.get("/", async (req, res) => {
  try {
    let response;
    allStatics().then((x) => {
      console.log("X ES...");
      console.log(x);
      response = x;
      res.status(200).send(response);
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/getbymonth/:month", async (req, res) => {
  console.log("ENTRANDO A getbymonth EN ROUTES");
  const { month } = req.params;
  try {
    let response;
    returnbymonth(month).then((x) => {
      console.log("X ES...");
      console.log(x);
      response = x;
      res.status(200).send(response);
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/getbyyear/:year", async (req, res) => {
  console.log("ENTRANDO A getbymonth EN ROUTES");
  const { year } = req.params;
  //const { month } = req.params;
  try {
    let response;
    returnbyyear(year).then((x) => {
      console.log("X ES...");
      console.log(x);
      response = x;
      res.status(200).send(response);
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/register", async (req, res) => {
  console.log("ENTRANDO A registerpurchase EN CONTROLLERS");
  let userid = req.body.userid;
  try {
    let response = await registerpurchase(userid);
    res.status(200).send("Purchase registered");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
