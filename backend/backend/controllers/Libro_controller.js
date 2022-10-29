import Libros from "../models/LibrosModel.js";

export const getLibro = async(req, res) =>{
    try {
        const response = await Libros.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getLibroById = async(req, res) =>{
    try {
        const response = await Libros.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createLibro = async(req, res) =>{
    try {
        await Libros.create(req.body);
        res.status(201).json({msg: "Libro added"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateLibro = async(req, res) =>{
    try {
        await Libros.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Libro Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteLibro = async(req, res) =>{
    try {
        await Libros.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Libro Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}



