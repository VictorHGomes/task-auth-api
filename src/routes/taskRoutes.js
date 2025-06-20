import express from 'express';
import taskController from '../controllers/taskController.js';

const router = express.Router();

router
.get("/", taskController.listarTarefas)
.post("/", taskController.criarTarefa) 


export default router;