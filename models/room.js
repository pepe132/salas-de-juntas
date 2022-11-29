import { DataTypes } from 'sequelize';
import dbsequelize from '../db/config.js';



const Meeting = dbsequelize.define('Meeting', {

  // Model attributes are defined here
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },

  title:{type:DataTypes.STRING},
  description:{type:DataTypes.STRING},

  startTime:{type:DataTypes.STRING},
  endTime:{type:DataTypes.STRING}
  
});

export default Meeting
