import Task from '../models/Task.js';

class TaskController {
    static criarTarefa = async (req, res) => {
        try{
            let tarefa = new Task(req.body);
            await tarefa.save(); // Salva a tarefa no banco de dados
            res.status(201).json(tarefa); // Retorna a tarefa criada com status 201
        }
     catch (error) {
            console.error("Erro ao criar tarefa:", error);
            res.status(500).json({ message: "Erro ao criar tarefa" });
        }
    }

    static listarTarefas = async (req, res) => {
        try {
            const tarefas = await Task.find();
            res.status(200).json(tarefas); // Retorna todas as tarefas com status 200
        } catch (error) {
            console.error("Erro ao listar tarefas:", error);
            res.status(500).json({ message: "Erro ao listar tarefas" });    //falta um middleware para tratar erros
        }
    }

    static listarTarefasPorUsuario = async (req, res) => {
        const usuarioId = req.params.usuarioId;
        try {
            const tarefas = await Task.find({ usuario: usuarioId });
            if (tarefas.length === 0) {
                return res.status(404).json({ message: "Nenhuma tarefa encontrada para este usuário" });
            }
            res.status(200).json(tarefas); // Retorna as tarefas do usuário com status 200
        } catch (error) {
            console.error("Erro ao listar tarefas por usuário:", error);
            res.status(500).json({ message: "Erro ao listar tarefas por usuário" });
        }
    }
}

export default TaskController;