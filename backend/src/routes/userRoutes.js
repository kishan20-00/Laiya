const router = require("express").Router();

const {addNewUser,viewUser,viewOneUser, updateUser,deleteUser, login} = require ('../controllers/userController.js')

//add new Hotel 
router.post("/add", addNewUser);

//view all Hotels
router.get("/", viewUser);

//update existing Hotel
 router.put("/update/:id",updateUser);

//delete existing one
 router.delete("/delete/:id",deleteUser);

//view one Hotel
router.get("/get/:id", viewOneUser);

// Route for user login
router.post("/login", login);

module.exports = router;