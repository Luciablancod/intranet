import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique } from 'sequelize-typescript';

@Table({ tableName: 'usuarios', timestamps: false })
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  login_id!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
    defaultValue: null,
  })
  login_usuario!: string | null;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
    defaultValue: null,
  })
  login_contrasenia!: string | null;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: null,
  })
  login_id_edificio!: number | null;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: null,
  })
  login_tipo!: number | null;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  login_active!: number;
}
