import express from "express";
import dotenv from "dotenv";
import conectaNaDatabase from "./src/config/dbConnect.js";
import taskRoutes from "./src/routes/taskRoutes.js";


dotenv.config();

const app = express();
conectaNaDatabase()
.then(() => console.log("Conexão com o banco de dados estabelecida"))
.catch((error) => console.error("Erro ao conectar ao banco de dados:", error));

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use("/tarefas", taskRoutes); //prefixo para todas as rotas de tarefas

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});



