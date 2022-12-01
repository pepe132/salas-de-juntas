
import Meeting from "../models/room.js";

export const existRoomById=async(id)=>{
    const existRoom=await Meeting.findByPk(id)
    if (!existRoom) {
        throw new Error(`Id does not exist: ${id}`);
    }   
}