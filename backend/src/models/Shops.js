const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ShopsSchema = new Schema({

  ShopID: {
    type: String,
    unique: true,
  },
  ShopName:{
    type: String,
  },
  FloorNumber:{
    type: String,
    require: true,
},
  Category :{
    type: String,     
   },
  OwnerName : {
    type: Number,
    require: true
},
  description : {
    type: String,
    require: true
},
status: {
    type: String,
    require: true,
}
})

// Middleware to generate ShopID before saving the document
ShopsSchema.pre('save', async function (next) {
  try {
      if (!this.isNew) {
          // If the document is not new, do not generate a new ID
          return next();
      }

      // Find the highest FloorID
      const highestShop = await this.constructor.findOne({}, {}, { sort: { ShopID: -1 } });

      let lastID = 1;
      if (highestShop) {
          // Extract the number part of the highest FloorID and increment it
          lastID = parseInt(highestShop.ShopID.split('_')[1]) + 1;
      }

      // Create the new FloorID by combining the prefix and the incremented number
      this.ShopID = `shop_${lastID}`;

      next();
  } catch (error) {
      next(error);
  }
});

const Shops = mongoose.model("Shops", ShopsSchema);
module.exports = Shops;