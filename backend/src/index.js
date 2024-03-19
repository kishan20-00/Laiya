const express = require("express");
const cors = require("cors");
const  mongoose = require('mongoose');
require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.json());

//User router
const userRouter = require("./routes/userRoutes.js");
app.use("/user", userRouter);

//Lost and Found router
const lostRouter = require("./routes/lostRoutes.js");
app.use("/lost", lostRouter);

//store Offers router
const loyaltyRouter = require("./routes/loyaltyRoutes.js");
app.use("/loyal", loyaltyRouter);

// //store Items router
// const storeItemRouter = require("./routes/storeItemsRoutes.js");
// app.use("/item", storeItemRouter);

// //promo code router
// const promoCodeRouter = require("./routes/promoCodeRouter.js");
// app.use("/promo", promoCodeRouter);

// //Package  router
// const packageRouter = require("./routes/packageRoutes.js");
// app.use("/package", packageRouter);

// //Hotel router
// const hotelRouter = require("./routes/hotelRoutes.js");
// app.use("/hotel", hotelRouter);

// //Rates Router
// const rateRouter = require("./routes/rateRoutes.js");
// app.use("/rate", rateRouter);

// //RealTime Router
// const realTimeRouter = require("./routes/realTimeRoutes.js");
// app.use("/realTime", realTimeRouter);

const initialize = async () => {
    try {
      await mongoose.connect(process.env.MONGO_CONNECT_URL);
      console.log("Mongodb connection success!");
    } catch (e) {
      console.log(e);
    }
  };
  
  const startServer = async () => {
    await initialize();
    app.listen(process.env.PORT || 6000);
    console.log('Server started');
  };
  
  startServer();