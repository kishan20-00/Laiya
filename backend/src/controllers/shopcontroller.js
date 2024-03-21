const shopDetails = require("../models/Shops");

//add new Vehicle for system
exports.addNewShop= async (req, res) => {
 
    //constant variables for the attributes
    const {
          ShopName,
          FloorNumber,
          Category,
          OwnerName,
          description,
        status
     } = req.body;
  
          const newShop = new shopDetails({
            ShopID,
          ShopName,
          FloorNumber,
          Category,
          OwnerName,
          description,
        status
        })
    
        newShop.save().then(() => {
             res.json("Shop Details Added")
    
        }).catch((err) => {
          
        })
      
    .catch((err) =>{
        
    })
    };

//delete existing one
exports.deleteShop = async (req, res) => {
    let shopID = req.params.id;
   
    await shopDetails.findByIdAndDelete(shopID).then(() => {
      res.status(200).json({ status: "Deleted Successfully" });
    }).catch((error) => {
      res.status(500).json({ status: "Error with Deleting", error: error.message });
    })
  }
   
 //update 
 exports.updateShop= async (req, res) => { 
    //fetch id from url
    let id = req.params.id;
    const {
        ShopName,
          FloorNumber,
          Category,
          OwnerName,
          description,
        status
           } = req.body;
  
    const updateShop = {
        ShopName,
        FloorNumber,
        Category,
        OwnerName,
        description,
      status
        }
  
  
    const update = await shopDetails.findByIdAndUpdate(id, updateShop).then(() => {
      res.status(200).send({status: "Shop Details updated"})
    }).catch((err) => {
       
        res.status(500).send({status: "Error with updating shop Details", error: err.message});
    })   
  }

//view 
exports.viewShop= async (req, res) => { 
 
    //calling  model
    shopDetails.find().then((shops) => {
      res.json(shops)
  
  }).catch((err) => {
     
  })
  
  }
  //view one
  exports.viewOneShop = async (req, res) => {
    
    let shopNumber = req.params.id;
    const shop = await shopDetails.findById(shopNumber).then((shop) => {
        res.status(200).send({status: "fetched", shop})
    }).catch(() => {
        
         res.status(500).send({status:"Error with get " , error: err.message})
    })
  }

exports.viewOneShopDetail = async (req, res) => {
    const shopName = req.params.name; // Assuming the name is passed as a parameter

    try {
        const shop = await shopDetails.findOne({ name: shopName });
        if (lost) {
            res.status(200).json({ status: "success", shop });
        } else {
            res.status(404).json({ status: "error", message: "Shop Details not found" });
        }
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};