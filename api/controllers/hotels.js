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

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city=>{
            return Hotels.countDocuments({city:city})
        }))
        res.status(200).json(list)
        // console.log("GetAll Hotels")
    } catch (error) {
        next(error)
    }
}

export const countByType = async (req, res, next) => {
    
   try {
    const hotelCount = await Hotels.countDocuments({type: "Hotel"})
    const apartmentCount = await Hotels.countDocuments({type: "apartment"})
    const resortCount = await Hotels.countDocuments({type: "resort"})
    const villaCount = await Hotels.countDocuments({type: "villa"})
    const cabinCount = await Hotels.countDocuments({type: "cabin"})

    res.status(200).json([
        {type:"Hotel", count: hotelCount},
        {type:"apartment", count: apartmentCount},
        {type:"resort", count: resortCount},
        {type:"villa", count: villaCount},
        {type:"cabin", count: cabinCount}
    ])
   } catch (error) {
        next(error)
   }
}