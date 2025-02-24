import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  Default,
  CreatedAt,
} from 'sequelize-typescript';
import { User } from './user.model';

@Table({ tableName: 'espacios_eventos', timestamps: false })
export class Event extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  eventos_id!: number;

  @Column({ type: DataType.STRING(255), allowNull: true })
  eventos_nombre!: string | null;

  @Column({ type: DataType.STRING(255), allowNull: true })
  eventos_organizador!: string | null;

  @Column({ type: DataType.STRING(255), allowNull: true })
  eventos_responsable!: string | null;

  @Column({ type: DataType.STRING(255), allowNull: true })
  eventos_telefono!: string | null;

  @Column({ type: DataType.STRING(255), allowNull: true })
  eventos_mail!: string | null;

  @Column({ type: DataType.STRING(1000), allowNull: true })
  eventos_descripcion!: string | null;

  @Column({ type: DataType.STRING(10), allowNull: true })
  eventos_sonido_unicen!: string | null;

  @Column({ type: DataType.STRING(10), allowNull: true })
  eventos_canion!: string | null;

  @Column({ type: DataType.FLOAT(11, 2), allowNull: true })
  eventos_costo!: number | null;

  @Column({ type: DataType.STRING(10), allowNull: true })
  eventos_calefaccion!: string | null;

  @Column({ type: DataType.STRING(255), allowNull: true })
  eventos_equipamientos!: string | null;

  @Column({ type: DataType.STRING(255), allowNull: true })
  eventos_evento_extension!: string | null;

  @Default('pendiente')
  @Column({ type: DataType.STRING(12), allowNull: false })
  eventos_estado!: string;

  @Column({ type: DataType.STRING(1000), allowNull: true })
  eventos_observaciones!: string | null;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: true })
  eventos_creado_por!: number | null;

  @BelongsTo(() => User)
  usuario!: User;

  @CreatedAt
  @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
  eventos_creado_fecha!: Date;

  @Default('si')
  @Column({ type: DataType.STRING(10), allowNull: false })
  eventos_activo!: string;
}
