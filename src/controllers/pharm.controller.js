import User from '../models/User';
import Pharm from '../models/Pharmacy';
import { ObjectId } from 'mongodb';

export const getPharms = async(req, res) => {

    const Pharms = await User.find({ roles: { "$in": [ObjectId("5fb69ee4d6e7e40c15ae3016")] } });
    res.status(200).json(Pharms);
}
export const countPharms = async(req, res) => {
    const totalPharms = await User.count({ roles: { "$in": [ObjectId("5fb69ee4d6e7e40c15ae3016")] } });

    res.status(200).json(totalPharms);
}

export const requestPharms = async(req, res) => {

    const { RUC, address, email, latitude, length, name, nameOwner, phone, photo, razonSocial } = req.body;

    const newRequest = new Pharm({
        RUC,
        address,
        email,
        latitude,
        length,
        name,
        nameOwner,
        phone,
        photo,
        razonSocial
    });

    const savedRequest = await newRequest.save();
    console.log(savedRequest);

    res.status(200).json({ savedRequest });
}

export const getRequestPharms = async(req, res) => {

    const RequestPharms = await Pharm.find();

    res.status(200).json(RequestPharms);
}

export const deleteRequestPharms = async(req, res) => {
    const { pharmId } = req.params;

    await Pharm.findByIdAndRemove(pharmId);

    res.status(204).json({ message: "se ha eliminado con exito la solicitud" });
}