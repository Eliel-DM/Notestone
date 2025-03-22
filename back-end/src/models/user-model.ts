// src/models/Usuario.ts
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false, // Adicionei false aqui, pois o nome provavelmente é obrigatório
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Garantindo que o e-mail seja único na tabela
  },
  senha_hash: {
    type: DataTypes.TEXT,
    allowNull: false, // O campo senha_hash também é obrigatório
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }
}, {
  tableName: 'usuarios', // Define explicitamente o nome da tabela
  underscored: true, // Para garantir que o nome das colunas siga o padrão snake_case
  timestamps: false,  // A tabela não possui campos updated_at, então o Sequelize não precisa gerenciar isso
});


export default User;
