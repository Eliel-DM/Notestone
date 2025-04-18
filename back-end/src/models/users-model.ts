import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  HasMany,
} from "sequelize-typescript";
import { Nota } from "./notes-model";

@Table({ tableName: "usuarios", timestamps: false })
export class Usuario extends Model<Usuario> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  nome!: string;

  @Column({ type: DataType.STRING, unique: true })
  email!: string;

  @Column(DataType.TEXT)
  senha_hash!: string;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at!: Date;

  @HasMany(() => Nota)
  notas!: Nota[];
}
