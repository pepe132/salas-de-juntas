import { DataTypes } from 'sequelize';
import dbsequelize from '../db/config.js';

const Meeting = dbsequelize.define('Meeting', {
  
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },

  title:{type:DataTypes.STRING},
  description:{type:DataTypes.STRING},

  startTime:{type:DataTypes.STRING},
  endTime:{type:DataTypes.STRING},
  available:{type:DataTypes.BOOLEAN}
  
});

export default Meeting
