import mongoose from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect(process.env.STRING_CONEXAO_DB)
    return mongoose.connection
        .once("open", () => console.log("Conectado ao MongoDB"))
        .on("error", (error) => console.error("Erro de conexão:", error));
}

export default conectaNaDatabase;