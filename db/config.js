const { Sequelize } = require('sequelize');

const dbConnection=async()=>{

  const sequelize = new Sequelize('rooms', 'root', '12345678', {
      host: 'localhost',
      dialect: 'mysql'
  })
  //Prueba de conexion a bases de datos
  try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }

}


  module.exports={dbConnection}

