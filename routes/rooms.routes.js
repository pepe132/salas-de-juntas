import { Router } from 'express'
import { check } from 'express-validator';
import { getRoomById, getRooms,createRoom,updateRoom,deleteRoom, getRoomsUnavailable, bookingRoom, finishRoom } from '../controllers/rooms.controllers.js';
import { existRoomById } from '../helpers/db-validators.js';
import validarCampos from '../middlewares/validar-campos.js';


const router=Router();

//Ruta para obtener todas las salas disponibles

router.get('/',getRooms)

//Ruta para obtener las salas ocupadas

router.get('/not-available',getRoomsUnavailable)

//ruta para obtener una sala

router.get('/:id',[
    validarCampos
],getRoomById)

//ruta para crear una nueva sala

router.post('/new-room',[
    check('title','The title is required').not().isEmpty(),
    validarCampos
],createRoom)

//ruta para actualizar una sala

router.put('/room/:id',[
    check('id').custom(existRoomById),
    validarCampos
],updateRoom)

//ruta para eliminar una sala

router.delete( '/room/:id',[
    check('id').custom(existRoomById),
    validarCampos
], deleteRoom )

//Reservar una sala

router.put('/room/booking/:id',[
    check('startTime','Initial hour is required').not().isEmpty(),
    check('id').custom(existRoomById),
    validarCampos
],bookingRoom)

// quitar reservar una sala

router.put('/room/finish-booking/:id',[
    check('endTime','Final hour is required').not().isEmpty(),
    check('id').custom(existRoomById),
    validarCampos
],finishRoom)


export default router;