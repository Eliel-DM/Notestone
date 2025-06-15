import { Sequelize } from "sequelize-typescript";
import { Usuario } from "../models/users-model";
import { Nota } from "../models/notes-model";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../config/database.sqlite",
  logging: false,
  models: [Usuario, Nota],
});

export async function connectToDataBase() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log("CONNECT TO DATABASE!");
  } catch (error) {
    console.error("ERROR TO CONNECT DATABASE!");
  }
}
