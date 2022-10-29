import express from "express";
import {
    getUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/user/listAll', getUsers);
router.get('/user/query/:id', getUserById);
router.post('/user/create', createUser);
router.patch('/user/update/:id', updateUser);
router.delete('/user/delete/:id', deleteUser);

export default router;