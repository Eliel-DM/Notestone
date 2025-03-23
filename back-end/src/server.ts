import express from "express";
import cors from "cors";
import router from "./routes/notes-router";
import { connectToDataBase } from "./config/database";
import User from "./models/user-model";
import Note from "./models/note-model";

(async function main() {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use("/api", router);

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Servidor Iniciado na porta ${port}!`);
  });

  await connectToDataBase();

  await User.create({
    nome: "João Silva",
    email: "joao@exampl.com",
    senha_hash: "hash_da_senha",
  });


  await Note.create({
    titulo: "Minha primeira nota",
    conteudo: "Este é o conteúdo da minha nota.",
    usuario_id: 1,
  });

})();
