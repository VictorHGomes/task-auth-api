import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String,
    concluida: { type: Boolean, default: false },
    dataCriacao: { type: Date, default: Date.now },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})
const Task = mongoose.model("Task", taskSchema);
export default Task;