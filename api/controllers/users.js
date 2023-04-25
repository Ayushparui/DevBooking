import Users from "../models/users.js";

export const updateUser = async (req, res, next) =>{
    try {
        const updateUser = await Users.findByIdAndUpdate(req.params.id, { $set: req.body},{new:true})
        res.status(200).json(updateUser)
        console.log("User Updated")
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        await Users.findByIdAndDelete(req.params.id)
        res.status(200).json("User Deleted")
        console.log("User Deleted")
    } catch (error) {
        next(error)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await Users.findById(req.params.id)
        res.status(200).json(user)
        console.log("Get User")
    } catch (error) {
        next(error)
    }
}

export const getAllUser = async (req, res, next) => {
    try {
        const user = await Users.find()
        res.status(200).json(user)
        console.log("GetAll Users")
    } catch (error) {
        next(error)
    }
}