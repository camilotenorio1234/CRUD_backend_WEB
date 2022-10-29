import express from "express";
import {
    getLibro, 
    getLibroById,
    createLibro,
    updateLibro,
    deleteLibro
} from "../controllers/Libro_controller.js";

const router = express.Router();

router.get('/Libros/listAll', getLibro);
router.get('/Libros//query/:id', getLibroById);
router.post('/Libros/create', createLibro);
router.patch('/Libros/update/:id', updateLibro);
router.delete('/Libros/delete/:id', deleteLibro);

export default router;