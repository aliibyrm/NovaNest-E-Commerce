const express= require("express");
const router = express.Router();

const couponRoute = require("./coupons.js");
//Diğer rota dosyalarını içe aktarıyoruz.
const productRoute = require("./products.js");
const authRoute = require("./auth.js");
const categoryRoute = require("./categories.js");
 const userRoute = require("./users.js");
 const paymentRoute = require("./payment.js");
//Her rotayı ilgili yol altında kullanıyoruz 
router.use("/categories",categoryRoute);
router.use("/auth",authRoute);
router.use("/products", productRoute); 
router.use("/coupons", couponRoute);
router.use("/users", userRoute);
router.use("/payment", paymentRoute);

module.exports = router;


