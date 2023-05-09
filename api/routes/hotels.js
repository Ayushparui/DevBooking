import express from "express"
import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotels, updateHotel } from "../controllers/hotels.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create
router.post('/', verifyAdmin,createHotel)
//Update
router.put('/:id', verifyAdmin, updateHotel)
//Delete
router.delete('/find/:id', verifyAdmin, deleteHotel)
//Get
router.get('/find/:id', getHotels)
//Get All
router.get('/', getAllHotels)

router.get('/countByCity', countByCity)

router.get('/countByType', countByType)


export default router
