const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL).then(
    ()=>console.log("Connected Successfully")
).catch((err)=>{console.log(err)});

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout", stripeRoute);


app.listen(5000,()=>{
    console.log("Backend server is running");
});