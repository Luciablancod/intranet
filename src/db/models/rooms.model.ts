import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({ tableName: 'espacios_lugares', timestamps: false })
export class Room extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  lugares_id!: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
    defaultValue: null,
  })
  lugares_nombre!: string | null;

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
    defaultValue: null,
  })
  lugares_direccion!: string | null;

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
    defaultValue: null,
  })
  lugares_dimensiones!: string | null;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: null,
  })
  lugares_capacidad!: number | null;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    defaultValue: null,
  })
  lugares_descripcion!: string | null;

  @Column({
    type: DataType.STRING(70),
    allowNull: true,
    defaultValue: null,
  })
  lugares_color!: string | null;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: null,
  })
  lugares_id_edificio!: number | null;
}
