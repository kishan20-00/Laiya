const router = require("express").Router();

const {addNewLoyalty,viewLoyalty,viewOneLoyalty, updateLoyalty,deleteLoyalty} = require ('../controllers/loyaltyController.js')

//add new Hotel 
router.post("/add", addNewLoyalty);

//view all Hotels
router.get("/", viewLoyalty);

//update existing Hotel
 router.put("/update/:id",updateLoyalty);

//delete existing one
 router.delete("/delete/:id",deleteLoyalty);

//view one Hotel
router.get("/get/:id", viewOneLoyalty);



module.exports = router;