import express from "express";
import cors from "cors";
import router from "./routes/notes-router";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Servidor Iniciado na porta ${port}!`);
});
