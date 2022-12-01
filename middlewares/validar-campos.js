import { validationResult } from 'express-validator';

//validar campos contra bases de datos
const validarCampos=(req,res,next)=>{

    const errors=validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
        
    }

    next();//si llega a este punto sigue con el siguiente middleware

}

export default validarCampos