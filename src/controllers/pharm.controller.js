import Pharm from '../models/Pharmacy';
import Request from '../models/Request';
import Medicine from '../models/Medicine';


export const getPharms = async(req, res) => {
    const Pharms = await Pharm.find();
    res.status(200).json(Pharms);
}

export const getPharmById = async(req, res) => {
    const Pharmacy = await Pharm.findById(req.params.id);
    res.status(200).json(Pharmacy);
}

export const updatePharmacyById = async(req, res) => {
    const {
        razonSocial,
        name,
        nameOwner,
        email,
        phone,
        RUC,
        address,
        latitude,
        longitude,
        imgURL
    } = req.body;

    const myquery = { _id: req.params.pharmId };

    const updatedPharmacy = await Pharm.updateOne(myquery, {
        razonSocial,
        name,
        nameOwner,
        email,
        phone,
        RUC,
        address,
        latitude,
        longitude,
        imgURL
    }, {
        new: true
    })

    res.status(200).json({ message: updatedPharmacy })
}

export const getRequestPharms = async(req, res) => {
    const PharmsReq = await Request.find();
    res.status(200).json(PharmsReq);
}

export const countPharms = async(req, res) => {
    const totalPharms = await Pharm.countDocuments();

    res.status(200).json(totalPharms);
}

export const countMedicineforPharm = async(req, res) => {
    const CountMedicines = await Medicine.find({ company: req.params._id }).countDocuments();

    res.status(200).json(CountMedicines);
}

export const lastPharmAgree = async(req, res) => {
    const lastPharm = await Pharm.find().sort({ $natural: -1 }).limit(1);

    res.status(200).json(lastPharm);
}


export const countRequestPharms = async(req, res) => {
    const totalRequestPharms = await Request.countDocuments();

    res.status(200).json(totalRequestPharms);
}

export const createRequestPharms = async(req, res) => {

    const { RUC, address, email, password, latitude, longitude, name, nameOwner, phone, imgURL, razonSocial } = req.body;

    const newRequest = new Request({
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
        password
    });

    const savedRequest = await newRequest.save();
    console.log(savedRequest);

    res.status(200).json({ savedRequest });
}


export const deleteRequestPharms = async(req, res) => {
    const { pharmId } = req.params;

    console.log(req.params);
    const pharm = await Request.findByIdAndRemove(pharmId);

    res.status(204).json({ message: "se ha eliminado con exito la solicitud" });
}

export const deletePharm = async(req, res) => {
    const { pharmId } = req.params;

    const PharmacyRemoved = await Pharm.findByIdAndRemove(pharmId);

    res.status(204).json({ message: "se ha eliminado la farmacia!" });
}