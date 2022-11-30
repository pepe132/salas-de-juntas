import { Router } from 'express'
import { getRoomById, getRooms,createRoom,updateRoom,deleteRoom } from '../controllers/rooms.controllers.js';


const router=Router();

//Ruta para obtener todas las salas

router.get('/',getRooms)

router.get('/:id',getRoomById)

router.post('/new-room',createRoom)

router.put('/room/:id',updateRoom)

router.delete( '/room/:id', deleteRoom )

export default router;