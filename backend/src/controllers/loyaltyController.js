const loyaltyDetails = require("../models/Loyalty");

//add new Vehicle for system
exports.addNewLoyalty= async (req, res) => {
 
    //constant variables for the attributes
    const {
        LoyaltyID,
        LoyaltyOfferName,
        LoyaltyPrices,
        Store,
        description,
     } = req.body;
  
  
    loyaltyDetails.findOne({LoyaltyID: LoyaltyID})
      .then((savedLoyalty) => {
          if(savedLoyalty) {
              return res.status(422).json({error:"Loyalty Details already exists with that no"})
          }
  
          const newLoyalty = new loyaltyDetails({
            LoyaltyID,
        LoyaltyOfferName,
        LoyaltyPrices,
        Store,
        description,
        })
    
        newLoyalty.save().then(() => {
             res.json("Loyalty Details Added")
    
        }).catch((err) => {
          
        })
      
    }).catch((err) =>{
        
    })
    }

//delete existing one
exports.deleteLoyalty = async (req, res) => {
    let loyaltyID = req.params.id;
   
    await loyaltyDetails.findByIdAndDelete(loyaltyID).then(() => {
      res.status(200).json({ status: "Deleted Successfully" });
    }).catch((error) => {
      res.status(500).json({ status: "Error with Deleting", error: error.message });
    })
  }
   
 //update 
 exports.updateLoyalty= async (req, res) => { 
    //fetch id from url
    let id = req.params.id;
    const {
        LoyaltyOfferName,
        LoyaltyPrices,
        Store,
        description,
           } = req.body;
  
    const updateLoyalty = {
        LoyaltyOfferName,
        LoyaltyPrices,
        Store,
        description,
        }
  
  
    const update = await loyaltyDetails.findByIdAndUpdate(id, updateLoyalty).then(() => {
      res.status(200).send({status: "Loyalty Details updated"})
    }).catch((err) => {
       
        res.status(500).send({status: "Error with updating loyalty Details", error: err.message});
    })   
  }

//view 
exports.viewLoyalty= async (req, res) => { 
 
    //calling  model
    loyaltyDetails.find().then((loyalties) => {
      res.json(loyalties)
  
  }).catch((err) => {
     
  })
  
  }
  //view one
  exports.viewOneLoyalty = async (req, res) => {
    
    let loyaltyNumber = req.params.id;
    const loyalty = await loyaltyDetails.findById(loyaltyNumber).then((loyalty) => {
        res.status(200).send({status: "fetched", loyalty})
    }).catch(() => {
        
         res.status(500).send({status:"Error with get " , error: err.message})
    })
  }

exports.viewOneLoyaltyDetail = async (req, res) => {
    const loyaltyName = req.params.name; // Assuming the name is passed as a parameter

    try {
        const loyalty = await loyaltyDetails.findOne({ name: loyaltyName });
        if (loyalty) {
            res.status(200).json({ status: "success", loyalty });
        } else {
            res.status(404).json({ status: "error", message: "Loyalty Details not found" });
        }
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};