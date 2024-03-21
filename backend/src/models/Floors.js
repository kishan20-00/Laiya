const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const FloorSchema = new Schema({

  FloorID: {
    type: String,
    unique: true,
  },
  FloorNumber:{
    type: String,
  },
  AvailableSlots:{
    type: String,
    require: true,
},
  FloorKeeper :{
    type: String,     
   },
})

// Middleware to generate FloorID before saving the document
FloorSchema.pre('save', async function (next) {
  try {
      if (!this.isNew) {
          // If the document is not new, do not generate a new ID
          return next();
      }

      // Find the highest FloorID
      const highestFloor = await this.constructor.findOne({}, {}, { sort: { FloorID: -1 } });

      let lastID = 1;
      if (highestFloor) {
          // Extract the number part of the highest FloorID and increment it
          lastID = parseInt(highestFloor.FloorID.split('_')[1]) + 1;
      }

      // Create the new FloorID by combining the prefix and the incremented number
      this.FloorID = `floor_${lastID}`;

      next();
  } catch (error) {
      next(error);
  }
});

const Floor = mongoose.model("Floor", FloorSchema);
module.exports = Floor;