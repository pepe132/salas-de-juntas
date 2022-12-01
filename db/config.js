import { Sequelize } from 'sequelize';

 const dbsequelize = new Sequelize('rooms', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql'
})

export default dbsequelize;
