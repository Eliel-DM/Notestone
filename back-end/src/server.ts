import express from "express";
import cors from "cors"; //carregando CORS. assim vai permitir o consumo da API por portas diferentes
import router from "./routes/notes-router";

const app = express();
app.use(cors()); //aqui todas as portas são aceitas localmente. 
app.use("/api", router);

const port = process.env.PORT || 3000; //caso a porta n seja definida rodar na portal 3000
app.listen(port, () => {
  console.log(`Servidor Iniciado na porta ${port}!`);
});


