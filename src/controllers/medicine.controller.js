import Medicine from "../models/Medicine";
import path from 'path';
import fs from 'fs-extra';

export const createMedicine = async(req, res) => {

    const { name, category, price, type, company } = req.body;

    console.log(req.file);

    const newMedicine = new Medicine({
        name,
        category,
        type,
        price,
        imgURL: req.file.path,
        company
    });

    const medicineSaved = await newMedicine.save();

    res.status(201).json({ medicineSaved });
}

export const getMedicines = async(req, res) => {
    const medicines = await Medicine.find();
    res.json(medicines);
}

export const countMedicines = async(req, res) => {
    const totalMedicines = await Medicine.find().countDocuments();
    res.json(totalMedicines);
}

export const searchMedicine = async(req, res) => {
    const { medicineName } = req.params;
    const param = new RegExp(medicineName);

    const medicinesFound = await Medicine.find({ name: param });
    res.status(200).json(medicinesFound);
}

export const getMedicineById = async(req, res) => {
    const medicine = await Medicine.findById(req.params.medicineId);

    res.status(200).json(medicine);
}

export const updateMedicineById = async(req, res) => {
    const updatedMedicine = await Medicine.findOneAndUpdate(req.params.productId, req.body, {
        new: true
    })

    res.status(200).json(updatedMedicine)
}

export const deleteProductById = async(req, res) => {

    const { medicineId } = req.params;

    const medicine = await Medicine.findOneAndDelete({ _id: medicineId });

    if (medicine) {
        await fs.unlink(path.resolve(medicine.imgURL));
    }

    res.status(204).json({
        message: 'Medicine Deleted',
        medicine
    });
}