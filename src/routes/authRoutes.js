import express from 'express';
import AuthController from '../controllers/authController.js';

const router = express.Router();

router.post('/registrar', AuthController.registrarUsuario)
.get("/usuarios", AuthController.listarUsuarios) 

export default router;