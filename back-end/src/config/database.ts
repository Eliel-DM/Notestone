import { Sequelize } from "sequelize";
// Importa as variáveis de ambiente do .env

const dialect = process.env.DB_DIALECT;
const storage = process.env.DB_STORAGE;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
  logging: false,
});

/* 
export const  sequelize = new Sequelize('nome-do-banco','usurio','senha'{
  host: 'localhost' // Endereço de onde está o seu banco;
  dialect: 'postgres',
  logging: false,
});

*/

export async function connectToDataBase() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log("CONNECT TO DATABASE!");
  } catch (error) {
    console.error("ERROR TO CONNECT DATABASE!");
  }
}
