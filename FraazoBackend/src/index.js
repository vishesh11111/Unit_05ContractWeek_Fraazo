
const express = require("express");
// const { route } = require("./controllers/fruits.controller");


const fruitsController = require("./controllers/fruits.controller");
const VegitableController = require("./controllers/vegitable.controller");
const LoginController = require("./controllers/login.controller");
const CartController = require("./controllers/cart.controller");


const router = express();
router.use(express.json());

router.use("/fruits", fruitsController);
router.use("/vegitables", VegitableController);
router.use("/login", LoginController);
router.use("/cart", CartController),


module.exports = router