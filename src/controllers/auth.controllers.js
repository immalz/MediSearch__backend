import User from "../models/User";
import Pharmacy from '../models/Pharmacy';
import jwt from "jsonwebtoken";
import config from '../config';
import Role from '../models/Role'

export const signUp = async(req, res) => {
    const { username, email, password, roles } = req.body;
    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles } });
        newUser.roles = foundRoles.map(role => role._id)
    } else {
        const role = await Role.findOne({ name: "user" });
        newUser.roles = [role._id];
    }

    const savedUser = await newUser.save();
    console.log(savedUser);
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
        expiresIn: 86400 // 24 horas
    });
    res.status(200).json({ token });

}

export const signIn = async(req, res) => {
    const userFound = await (await User.findOne({ email: req.body.email }))

    if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });

    const matchPassword = await User.comparePassword(req.body.password, userFound.password);

    if (!matchPassword) return res.status(401).json({ token: null, message: 'Contraseña invalida' })

    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
        expiresIn: 86400
    })

    res.json({ token, userFound });
}


/* REGISTRO Y LOGIN DE FARMACIAS */


export const signUpPharms = async(req, res) => {
    const {
        razonSocial,
        name,
        nameOwner,
        email,
        password,
        phone,
        RUC,
        address,
        latitude,
        longitude,
        imgURL,
        roles
    } = req.body;

    const newPharmacy = new Pharmacy({
        razonSocial,
        name,
        nameOwner,
        email,
        phone,
        RUC,
        address,
        latitude,
        longitude,
        imgURL,
        password: await Pharmacy.encryptPassword(password)
    })

    if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles } });
        newPharmacy.roles = foundRoles.map(role => role._id)
    } else {
        const role = await Role.findOne({ name: "moderator" });
        newPharmacy.roles = [role._id];
    }

    const savedPharmacy = await newPharmacy.save();

    console.log(savedPharmacy);

    const token = jwt.sign({ id: savedPharmacy._id }, config.SECRET, {
        expiresIn: 86400 // 24 horas
    });
    res.status(200).json({ token });

}

export const signInPharm = async(req, res) => {
    const PharmacyFound = await (await Pharmacy.findOne({ RUC: req.body.RUC }))

    if (!PharmacyFound) return res.status(400).json({ message: "Usuario no encontrado" });

    const matchPassword = await Pharmacy.comparePassword(req.body.password, PharmacyFound.password);

    if (!matchPassword) return res.status(401).json({ token: null, message: 'Contraseña invalida' })

    const token = jwt.sign({ id: PharmacyFound._id }, config.SECRET, {
        expiresIn: 86400 // 24 horas
    })

    res.json({ token, PharmacyFound });
}