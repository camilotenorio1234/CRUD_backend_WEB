import express from "express";
import {
    getMusic, 
    getMusicById,
    createMusic,
    updateMusic,
    deleteMusic
} from "../controllers/music_controller.js";

const router = express.Router();

router.get('/Musica/listAll', getMusic);
router.get('/Musica//query/:id', getMusicById);
router.post('/Musica/create', createMusic);
router.patch('/Musica/update/:id', updateMusic);
router.delete('/Musica/delete/:id', deleteMusic);

export default router;