import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Musica = db.define('Musica',{
   
    titulo: DataTypes.STRING,
    tipo: DataTypes.STRING,
    disquera: DataTypes.STRING,
    year: DataTypes.STRING,
    autor: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Musica;

(async()=>{
    await db.sync();
})();