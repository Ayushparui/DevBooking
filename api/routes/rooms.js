import express from "express"
import { createRoom, deleteRoom, getAllRooms, getRooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post('/:hotelid', verifyAdmin,createRoom)
//Update
router.put('/:id', verifyAdmin, updateRoom)
//Delete
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom)
//Get
router.get('/:id', getRooms)
//Get All
router.get('/', getAllRooms)


export default router
