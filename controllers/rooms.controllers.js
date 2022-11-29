import { response } from "express";

export const getRooms=(req,res=response)=>{
    res.json({
        msg:'get rooms'
    })

}

export const getRoomById=()=>{
    const {id}=req.params;

    res.json({
        msg:'romm by id',
        id
    })
}

