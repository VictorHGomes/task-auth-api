import User from "../models/User.js";

class AuthController {
    static registrarUsuario = async (req, res) => {
        try {
            const { username, password, email } = req.body;
            if (!username || !password || !email) {
                return res.status(400).json({ message: "Todos os campos são obrigatórios" });
            }

            const usuarioExistente = await User.findOne({ email });
            if (usuarioExistente) {
                return res.status(409).json({ message: "Usuário já existe com este email" });
            }

            const novoUsuario = new User({ username, password, email });
            await novoUsuario.save();
            res.status(201).json({ message: "Usuário registrado com sucesso" });
        } catch (error) {
            console.error("Erro ao registrar usuário:", error);
            res.status(500).json({ message: "Erro ao registrar usuário" });
        }
    }

    static listarUsuarios = async (req, res) => {
        try {
            const usuarios = await User.find();
            if (usuarios.length === 0) {
                return res.status(404).json({ message: "Nenhum usuário encontrado" });
            }
            res.status(200).json(usuarios);
        } catch (error) {
            console.error("Erro ao listar usuários:", error);
            res.status(500).json({ message: "Erro ao listar usuários" });
        }
    }
}

export default AuthController;