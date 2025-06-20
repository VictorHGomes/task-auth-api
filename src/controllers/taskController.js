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
}