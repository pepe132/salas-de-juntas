const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports=()=>{

    const User = sequelize.define('room', {
      // Model attributes are defined here
      id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      title:{type:DataTypes.STRING},
      description:{type:DataTypes.STRING},
      startTime:{type:DataTypes.TIME},
      endTime:{type:DataTypes.TIME}
      
    });
    return User
}
