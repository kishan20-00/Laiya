const lostDetails = require("../models/Lost");

//add new Vehicle for system
exports.addNewLost= async (req, res) => {
 
    //constant variables for the attributes
    const {
        LostID,
        LostItem,
        UserName,
        Image,
        contactNumber,
        description,
        status
     } = req.body;
  
  
    lostDetails.findOne({LostID: LostID})
      .then((savedLost) => {
          if(savedLost) {
              return res.status(422).json({error:"Lost Detail already exists with that no"})
          }
  
          const newLost = new lostDetails({
            LostID,
        LostItem,
        UserName,
        Image,
        contactNumber,
        description,
        status,
        })
    
        newLost.save().then(() => {
             res.json("Lost Details Added")
    
        }).catch((err) => {
          
        })
      
    }).catch((err) =>{
        
    })
    }

//delete existing one
exports.deleteLost = async (req, res) => {
    let lostID = req.params.id;
   
    await lostDetails.findByIdAndDelete(lostID).then(() => {
      res.status(200).json({ status: "Deleted Successfully" });
    }).catch((error) => {
      res.status(500).json({ status: "Error with Deleting", error: error.message });
    })
  }
   
 //update 
 exports.updateLost= async (req, res) => { 
    //fetch id from url
    let id = req.params.id;
    const {
        LostItem,
        UserName,
        Image,
        contactNumber,
        description,
        status,
           } = req.body;
  
    const updateLost = {
        LostItem,
        UserName,
        Image,
        contactNumber,
        description,
        status,
        }
  
  
    const update = await lostDetails.findByIdAndUpdate(id, updateLost).then(() => {
      res.status(200).send({status: "Lost Details updated"})
    }).catch((err) => {
       
        res.status(500).send({status: "Error with updating lost Details", error: err.message});
    })   
  }

//view 
exports.viewLost= async (req, res) => { 
 
    //calling  model
    lostDetails.find().then((losts) => {
      res.json(losts)
  
  }).catch((err) => {
     
  })
  
  }
  //view one
  exports.viewOneLost = async (req, res) => {
    
    let lostNumber = req.params.id;
    const lost = await lostDetails.findById(lostNumber).then((lost) => {
        res.status(200).send({status: "fetched", lost})
    }).catch(() => {
        
         res.status(500).send({status:"Error with get " , error: err.message})
    })
  }

exports.viewOneLostDetail = async (req, res) => {
    const lostName = req.params.name; // Assuming the name is passed as a parameter

    try {
        const lost = await lostDetails.findOne({ name: lostName });
        if (lost) {
            res.status(200).json({ status: "success", lost });
        } else {
            res.status(404).json({ status: "error", message: "Lost Details not found" });
        }
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};