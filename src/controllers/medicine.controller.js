import Pharmacy from "../models/Pharmacy";
import Medicine from '../models/Medicine';
import path from 'path';
import fs from 'fs-extra';
const { ObjectID } = require('mongodb');

export const createMedicine = async(req, res) => {

    const { name, category, price, type } = req.body;
    const pharmacy = await Pharmacy.findById(req.params);
    const newMedicine = new Medicine({
        name,
        category,
        type,
        price,
        imgURL: req.file.path,
        company: pharmacy
    });
    await pharmacy.medicines.push(newMedicine)
    pharmacy.save();
    const medicineSaved = await newMedicine.save();

    res.status(201).json({ medicineSaved });
}

export const getMedicines = async(req, res) => {
    const medicines = await Medicine.find().populate('company');
    res.json(medicines);
}

export const getMedicinesForPharmacy = async(req, res) => {

    const pharmacyid = await Pharmacy.findById(req.params);
    const medicinesPharmacy = await Pharmacy.findById(pharmacyid).populate('medicines');
    res.json(medicinesPharmacy.medicines);
}

export const countMedicines = async(req, res) => {
    const totalMedicines = await Medicine.countDocuments();
    res.json(totalMedicines);
}

export const getMedicineById = async(req, res) => {
    const medicine = await Medicine.findById(req.params.medicineId);
    res.status(200).json(medicine);
}

export const lastMedicineAgree = async(req, res) => {
    const lastMedicine = await Medicine.find().sort({ $natural: -1 }).limit(1);

    res.status(200).json(lastMedicine);
}

export const updateMedicineById = async(req, res) => {
    const { name, category, type, price } = req.body;

    const myquery = { _id: req.params.medicineId };

    const updatedMedicine = await Medicine.updateOne(myquery, { name, category, type, price }, {
        new: true
    })

    res.status(200).json({ message: updatedMedicine })
}

export const deleteProductById = async(req, res) => {

    const { medicineId } = req.params;

    const medicine = await Medicine.findByIdAndDelete(medicineId);

    await Pharmacy.update({ _id: medicine.company }, { $pull: { "medicines": medicineId } });

    if (medicine) {
        await fs.unlink(path.resolve(medicine.imgURL));
    }

    res.status(204).json({ message: 'Medicine Deleted' });

}