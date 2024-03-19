const router = require("express").Router();

const {addNewLost,viewLost,viewOneLost, updateLost,deleteLost} = require ('../controllers/lostController.js')

//add new Hotel 
router.post("/add", addNewLost);

//view all Hotels
router.get("/", viewLost);

//update existing Hotel
 router.put("/update/:id",updateLost);

//delete existing one
 router.delete("/delete/:id",deleteLost);

//view one Hotel
router.get("/get/:id", viewOneLost);



module.exports = router;