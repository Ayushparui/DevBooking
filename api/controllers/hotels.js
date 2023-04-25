import Hotels from "../models/hotels.js";


export const createHotel = async(req, res, next) =>{
    const newHotel = new Hotels(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
        console.log("Hotel Saved")
    } catch (error) {
        next(error)
    }
}

export const updateHotel = async (req, res, next) =>{
    try {
        const updateHotel = await Hotels.findByIdAndUpdate(req.params.id, { $set: req.body},{new:true})
        res.status(200).json(updateHotel)
        console.log("Hotel Updated")
    } catch (error) {
        next(error)
    }
}

export const deleteHotel = async (req, res, next) => {
    try {
        await Hotels.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel Deleted")
        console.log("Hotel Deleted")
    } catch (error) {
        next(error)
    }
}

export const getHotels = async (req, res, next) => {
    try {
        const hotel = await Hotels.findById(req.params.id)
        res.status(200).json(hotel)
        console.log("Get Hotel")
    } catch (error) {
        next(error)
    }
}

export const getAllHotels = async (req, res, next) => {
    try {
        const hotels = await Hotels.find()
        res.status(200).json(hotels)
        console.log("GetAll Hotels")
    } catch (error) {
        next(error)
    }
}