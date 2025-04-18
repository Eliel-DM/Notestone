import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  HasMany,
  CreatedAt,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Usuario } from "./users-model";

@Table({ tableName: "notas", timestamps: false })
export class Nota extends Model<Nota> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  titulo!: string;

  @Column(DataType.TEXT)
  conteudo!: string;

  @ForeignKey(() => Usuario)
  @Column(DataType.INTEGER)
  usuario_id!: number;

  @BelongsTo(() => Usuario)
  usuario!: Usuario;
}
