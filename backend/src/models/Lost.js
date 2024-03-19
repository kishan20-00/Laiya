const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LostSchema = new Schema({

  LostID: {
    type: String,
    unique: true,
  },
  LostItem:{
    type: String,
  },
  UserName:{
    type: String,
    require: true,
},
  Image :{
    type: String,     
   },
  contactNumber : {
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

const Lost = mongoose.model("Lost", LostSchema);
module.exports = Lost;