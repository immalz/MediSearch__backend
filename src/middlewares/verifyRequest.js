import Request from '../models/Request'

export const checkDuplicatedRucOrEmailorRazonSocial = async(req, res, next) => {

    try {
        const RUC = await Request.findOne({ RUC: req.body.RUC })
        if (RUC) return res.status(400).json({ message: 'Ya se ha enviado una solicitud con este RUC' });

        const email = await Request.findOne({ email: req.body.email })
        if (email) return res.status(400).json({ message: 'El correo ya se encuentra registrado' });

        const razonSocial = await Request.findOne({ razonSocial: req.body.razonSocial })
        if (razonSocial) return res.status(400).json({ message: 'La razon social ya se encuentra registrado' });

        next();

    } catch (error) {
        res.status(500).json({ mesasge: error });
    }
}