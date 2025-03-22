// src/models/Nota.ts
import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const Note = sequelize.define(
  "Note",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: true, // ou false, dependendo de sua necessidade
    },
    conteudo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "usuarios",
        key: "id",
      },
    },
  },
  {
    tableName: "notas", // Define explicitamente o nome da tabela
    underscored: true, // Para garantir que o nome das colunas siga o padrão snake_case
    timestamps: true, // Para usar os campos created_at e updated_at automaticamente
  }
);

export default Note;
