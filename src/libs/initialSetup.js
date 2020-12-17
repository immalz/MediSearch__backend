import Role from "../models/Role";
import Type from "../models/Type";


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


export const createTypes = async() => {
    try {
        const count = await Type.estimatedDocumentCount()

        if (count > 0) return;

        const values = await Promise.all([
            new Type({ name: 'Pastilla' }).save(),
            new Type({ name: 'Jarabe' }).save(),
            new Type({ name: 'Pildora' }).save(),
            new Type({ name: 'Crema' }).save()
        ]);

        console.log(values);
    } catch (error) {
        console.log(error);
    }
}