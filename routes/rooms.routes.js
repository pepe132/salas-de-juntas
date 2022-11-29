import {Router} from 'express'
import { getRooms } from '../controllers/rooms.controllers.js';


const router=Router();

//Ruta para obtener todas las salas

router.get('/',getRooms)

export default router;