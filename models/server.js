import express from 'express'
import cors from 'cors'
import dbsequelize from '../db/config.js';

import * as roomsRoutes from '../routes/rooms.routes.js'

class Server{
    constructor(){
        this.app=express();
        this.PORT=process.env.PORT
        this.paths={
            rooms:'/api/rooms'
        }

        //inicializacion de middlewares de nuestra aplicacion
        this.dbConnection()
        
        this.middlewares()

        this.routes();

    }
    //Conexion a nuestra base de datos
    async dbConnection(){
        try {
            await dbsequelize.authenticate()
            console.log('database online');
        } catch (error) {
            console.log(error);
            throw new Error(error)
            
        }
    }

    middlewares(){

        this.app.use(cors())
        this.app.use(express.static('public'))
        this.app.use(express.json())

    }
    //ruta principal de nuestra aplicacion
    routes(){
        this.app.use(this.paths.rooms,roomsRoutes.default)

    }

    listen(){

        this.app.listen(process.env.PORT,()=>{
            console.log('servidor corriendo en el puerto',process.env.PORT);
        })

    }

}

export default Server;
