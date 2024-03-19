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

const Loyalty = mongoose.model("Loyalty", LoyaltySchema);
module.exports = Loyalty;