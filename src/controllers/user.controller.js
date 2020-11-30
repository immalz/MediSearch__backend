import User from "../models/User";
import Roles from '../models/Role';

export const createUser = (req, res) => {
    res.json('creando usuario');
}

export const countUsers = async(req, res) => {
    const totalUsers = await User.find().count();
    res.status(200).json(totalUsers);
}

export const getUsers = async(req, res) => {
    const Users = await User.find();
    res.status(200).json(Users);
}

export const findRole = async(req, res) => {
    try {
        const id = req.params.id;
        const medicine = await User.find({ "_id": id });

        const roles = medicine[0].roles

        for (let i = 0; i < roles.length; i++) {
            if (roles[i] == "5fb69ee4d6e7e40c15ae3017") {
                return res.json({ message: 'admin' });
            } else if (roles[i] == "5fb69ee4d6e7e40c15ae3016" && roles[1] != "5fb69ee4d6e7e40c15ae3017" && roles[2] != "5fb69ee4d6e7e40c15ae3017") {
                return res.json({ message: 'moderator' });
            } else if (roles[i] == "5fb69ee4d6e7e40c15ae3015" && roles[1] != "5fb69ee4d6e7e40c15ae3016" && roles[2] != "5fb69ee4d6e7e40c15ae3017") {
                return res.json({ message: 'user' });
            }
        }
    } catch (error) {
        return console.log(error);
    }

}