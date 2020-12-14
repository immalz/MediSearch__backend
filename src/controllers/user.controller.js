import User from "../models/User";

export const createUser = (req, res) => {
    res.json('creando usuario');
}

export const getUserById = async(req, res) => {
    const Userasd = await User.findById(req.params.id);
    res.status(200).json(Userasd);
}

export const getUsers = async(req, res) => {
    const Users = await User.find();
    res.status(200).json(Users);
}

export const updateUserById = async(req, res) => {
    const {
        username,
        email,
        phone,
        address,
        imgURL,
        password
    } = req.body;

    const myquery = { _id: req.params.id };

    const updatedUser = await User.updateOne(myquery, {
        username,
        email,
        phone,
        address,
        imgURL,
        password: await User.encryptPassword(password)
    }, {
        new: true
    })

    res.status(200).json({ message: updatedUser })
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