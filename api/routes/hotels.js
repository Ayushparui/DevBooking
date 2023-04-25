import express from "express"
import { createHotel, deleteHotel, getAllHotels, getHotels, updateHotel } from "../controllers/hotels.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create
router.post('/', verifyAdmin,createHotel)
//Update
router.put('/:id', verifyAdmin, updateHotel)
//Delete
router.delete('/:id', verifyAdmin, deleteHotel)
//Get
router.get('/:id', getHotels)
//Get All
router.get('/', getAllHotels)


export default router