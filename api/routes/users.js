import express from "express"
import { updateUser, deleteUser, getUser, getAllUser } from "../controllers/users.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();


// router.get("/checkAuthentication", verifyToken, (req, res, next)=>{
//     res.send("hello user you are authenticated")
// })

// router.get("/checkuser/:id", verifyUser,(req, res, next)=>{
//     res.send("Hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin,(req, res, next)=>{
//     res.send("Hello admin, you are logged in and you can delete all your accounts")
// })

//Update
router.put('/:id', verifyUser, updateUser)
//Delete
router.delete('/:id', verifyUser, deleteUser)
//Get
router.get('/:id', verifyUser, getUser)
//Get All
router.get('/', verifyAdmin,getAllUser)

export default router
