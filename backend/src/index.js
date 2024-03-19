const express = require("express");
const cors = require("cors");
const  mongoose = require('mongoose');
require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.json());

// //User router
// const userRouter = require("./routes/userRoutes.js");
// app.use("/user", userRouter);

// //Clothes router
// const clothesRouter = require("./routes/clothRoutes.js");
// app.use("/cloth", clothesRouter);

// //store Offers router
// const storeOfferRouter = require("./routes/storeOffersRoutes.js");
// app.use("/offer", storeOfferRouter);

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