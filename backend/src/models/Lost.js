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

// Middleware to generate LostID before saving the document
LostSchema.pre('save', async function (next) {
  try {
      if (!this.isNew) {
          // If the document is not new, do not generate a new ID
          return next();
      }

      // Find the highest FloorID
      const highestLost = await this.constructor.findOne({}, {}, { sort: { LostID: -1 } });

      let lastID = 1;
      if (highestLost) {
          // Extract the number part of the highest FloorID and increment it
          lastID = parseInt(highestLost.LostID.split('_')[1]) + 1;
      }

      // Create the new FloorID by combining the prefix and the incremented number
      this.LostID = `lost_${lastID}`;

      next();
  } catch (error) {
      next(error);
  }
});



const Lost = mongoose.model("Lost", LostSchema);
module.exports = Lost;