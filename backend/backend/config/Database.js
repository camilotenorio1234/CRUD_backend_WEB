import {Sequelize} from "sequelize";

const db = new Sequelize('web_prueba','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;