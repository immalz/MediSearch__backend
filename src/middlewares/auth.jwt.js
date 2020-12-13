import jwt from "jsonwebtoken";
import config from '../config';
import Pharmacy from '../models/Pharmacy';
import Role from '../models/Role';

export const verifyToken = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) return res.status(403).json({ message: "no se ha enviado el token" })

        const decoded = jwt.verify(token, config.SECRET);
        req.AdminId = decoded.id;
        const user = await Pharmacy.findById(req.AdminId, { password: 0 });

        if (!user) return res.status(404).json({ message: 'no se encontró un usuario' })
        next();

    } catch (error) {
        return console.log(error);;
    }
};

export const verifyTokenByMods = async(req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) return res.status(403).json({ message: "no se ha enviado el token" })

}

export const isModerator = async(req, res, next) => {
    const user = await Pharmacy.findById(req.AdminId);
    const roles = await Role.find({ _id: { $in: user.roles } })

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
            next()
            return;
        }
    }
    return res.status(403).json({ message: "require un rol de moderador" });
}

export const isAdmin = async(req, res, next) => {
    const user = await Pharmacy.findById(req.AdminId);
    const roles = await Role.find({ _id: { $in: user.roles } })

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
            next()
            return;
        }
    }
    return res.status(403).json({ message: "require un rol de administrador" });
}