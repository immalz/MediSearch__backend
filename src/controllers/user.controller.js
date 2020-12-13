import User from "../models/User";

export const createUser = (req, res) => {
    res.json('creando usuario');
}

export const getUsers = async(req, res) => {
    const Users = await User.find();

    res.status(200).json(Users);
}

export const deleteUser = async(req, res) => {
    const { UserId } = req.params;
    const UserDelete = await User.findByIdAndDelete(UserId);

    res.status(200).json({ UserDelete });
}

export const lastUserAgree = async(req, res) => {
    const lastUser = await User.find().sort({ $natural: -1 }).limit(1);

    res.status(200).json(lastUser);
}

export const countUsers = async(req, res) => {
    const totalUsers = await User.countDocuments();

    res.status(200).json(totalUsers);
}