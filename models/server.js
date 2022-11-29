const express=require('express');
const cors=require('cors');
const { dbConnection } = require('../db/config');
class Server{
    constructor(){
        this.app=express();
        this.PORT=process.env.PORT
        this.paths={
            rooms:'/api/rooms'
        }
        
        //inicializacion de middlewares de nuestra aplicacion
        this.middlewares()

        //Coneccion a DB
        this.conectarDB();

    }

    async conectarDB(){
        await dbConnection()
    }

    middlewares(){

        this.app.use(cors())
        this.app.use(express.static('public'))
        this.app.use(express.json())

    }
    
    routes(){
        this.app.use(this.paths.rooms,require('../routes/rooms.routes'))

    }

    listen(){

        this.app.listen(process.env.PORT,()=>{
            console.log('servidor corriendo en el puerto',process.env.PORT);
        })

    }

}

module.exports=Server;