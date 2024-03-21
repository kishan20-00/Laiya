const router = require("express").Router();

const {addNewFloor,viewFloor,viewOneFloor, updateFloor,deleteFloor} = require ('../controllers/floorController.js')

//add new Hotel 
router.post("/add", addNewFloor);

//view all Hotels
router.get("/", viewFloor);

//update existing Hotel
 router.put("/update/:id",updateFloor);

//delete existing one
 router.delete("/delete/:id",deleteFloor);

//view one Hotel
router.get("/get/:id", viewOneFloor);



module.exports = router;