const express=require('express');
const cors=require('cors');
class Server{
    constructor(){
        this.app=express()
        this.paths={}
        
        //inicializacion de middlewares de nuestra aplicacion
        this.middlewares()

    }

    middlewares(){

        this.app.use(cors())
        this.app.use(express.static('public'))
        this.app.use(express.json())

    }

    listen(){

        this.app.listen(process.env.PORT,()=>{
            console.log('servidor corriendo en el puerto',process.env.PORT);
        })

    }

}

module.exports=Server;