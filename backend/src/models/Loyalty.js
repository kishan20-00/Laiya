const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LoyaltySchema = new Schema({

  LoyaltyID: {
    type: String,
    unique: true,
  },
  LoyaltyOfferName:{
    type: String,
  },
  LoyaltyPrices:{
    type: String,
    require: true,
},
  Store: {
    type: String,
    require: true,
  },
  description : {
    type: String,
    require: true
}
})

// Middleware to generate LoyaltyID before saving the document
LoyaltySchema.pre('save', async function (next) {
  try {
      if (!this.isNew) {
          // If the document is not new, do not generate a new ID
          return next();
      }

      // Find the highest FloorID
      const highestLoyalty = await this.constructor.findOne({}, {}, { sort: { LoyaltyID: -1 } });

      let lastID = 1;
      if (highestLoyalty) {
          // Extract the number part of the highest FloorID and increment it
          lastID = parseInt(highestLoyalty.LoyaltyID.split('_')[1]) + 1;
      }

      // Create the new FloorID by combining the prefix and the incremented number
      this.LoyaltyID = `loyalty_${lastID}`;

      next();
  } catch (error) {
      next(error);
  }
});

const Loyalty = mongoose.model("Loyalty", LoyaltySchema);
module.exports = Loyalty;