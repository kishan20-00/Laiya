const router = require("express").Router();

const {addNewShop,viewShop,viewOneShop, updateShop,deleteShop} = require ('../controllers/shopcontroller.js')

//add new Hotel 
router.post("/add", addNewShop);

//view all Hotels
router.get("/", viewShop);

//update existing Hotel
 router.put("/update/:id",updateShop);

//delete existing one
 router.delete("/delete/:id",deleteShop);

//view one Hotel
router.get("/get/:id", viewOneShop);



module.exports = router;