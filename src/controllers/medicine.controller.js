import Medicine from "../models/Medicine";

export const createMedicine = async(req, res) => {

    const { name, category, price, type, imgURL, brand, company } = req.body;

    const newMedicine = new Medicine({ name, category, type, price, imgURL, brand, company });

    const medicineSaved = await newMedicine.save();

    res.status(201).json(medicineSaved);
}

export const getMedicines = async(req, res) => {
    const medicines = await Medicine.find();
    res.json(medicines);
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

    await Medicine.findByIdAndRemove(medicineId);

    res.status(204).json();
}