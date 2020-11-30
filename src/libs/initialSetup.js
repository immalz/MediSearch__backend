import Role from "../models/Role";
import Pharmacy from "../models/Pharmacy";


export const createRoles = async() => {

    try {
        const count = await Role.estimatedDocumentCount()

        if (count > 0) return;

        const values = await Promise.all([
            new Role({ name: 'user' }).save(),
            new Role({ name: 'moderator' }).save(),
            new Role({ name: 'admin' }).save()
        ])

        console.log(values);
    } catch (error) {
        console.log(error);
    }
}


export const createPharms = async() => {
    try {
        const count = await Pharmacy.estimatedDocumentCount()

        if (count > 0) return;

        const values = await Promise.all([
            new Pharmacy({ name: 'InkaFarma', direction: 'Calle123' }).save(),
            new Pharmacy({ name: 'MiFarma', direction: 'Calle321' }).save()
        ]);

        console.log(values);
    } catch (error) {
        console.log(error);
    }
}