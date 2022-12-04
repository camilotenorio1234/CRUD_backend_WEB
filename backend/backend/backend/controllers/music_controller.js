import Musica from "../models/musicaModel.js";

export const getMusic = async(req, res) =>{
    try {
        const response = await Musica.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getMusicById = async(req, res) =>{
    try {
        const response = await Musica.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createMusic = async(req, res) =>{
    try {
        await Musica.create(req.body);
        res.status(201).json({msg: "Musica added"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateMusic = async(req, res) =>{
    try {
        await Musica.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Musica Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteMusic = async(req, res) =>{
    try {
        await Musica.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Musica Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}



