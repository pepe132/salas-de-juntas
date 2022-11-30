import { response } from "express";
import Meeting from "../models/room.js";

export const getRooms=async(req,res=response)=>{

    const meetings= await Meeting.findAll()
    res.json(meetings)

}

export const getRoomById=async(req,res=response)=>{
    const {id}=req.params;

    const meeting=await Meeting.findByPk(id)
    if (meeting) {

        res.json(meeting)
        
    }else{
        res.status(404).json({
            msg:'No existe una sala de reunion con este id'
        })
    }
}

export const createRoom=async(req,res=response)=>{
    const {body}=req;

    const existRoom=await Meeting.findOne({
        where:{
            title:body.title
        }
    });

    if (existRoom) {
        return res.status(400).json({
            msg:'Ya existe una sala con ese nombre'
        })
        
    }

    try {
        const meeting=new Meeting(body);
        await meeting.save()

        res.json(meeting)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Hable con el administrador'
        })
        
    }
    
}

export const updateRoom=async(req,res=response)=>{
    const {id}=req.params
    const {body}=req;

    try {
        const meeting=await Meeting.findByPk(id);
        if (!meeting) {
            return res.status(404).json({
                msg:'No existe una sala con dicho id'
            })
            
        }

        await meeting.update(body)

        res.json(meeting)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Hable con el administrador'
        })
        
    }
    
}

export const deleteRoom=async(req,res=response)=>{
    const {id}=req.params;

    const meeting=await Meeting.findByPk(id)
    if (!meeting){
        return res.status(404).json({
            msg:'No existe una reunion con ese id'
        })
        
    }

    await meeting.destroy()

    res.json(meeting)
}




