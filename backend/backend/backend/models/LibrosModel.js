import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Libros = db.define('Libros',{
   
    titulo: DataTypes.STRING,
    tipo: DataTypes.STRING,
    editorial: DataTypes.STRING,
    year: DataTypes.STRING,
    autor: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Libros;

(async()=>{
    await db.sync();
})();