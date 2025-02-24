import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    CreatedAt,
    Default,
  } from 'sequelize-typescript';
  import { User } from './user.model'; // Assuming you have a User model
  import { Event } from './event.model'; // Assuming you have an Evento model
  
  @Table({ tableName: 'espacios_eventos_log', timestamps: false })
  export class EventLogs extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    logs_id!: number;
  
    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    logs_id_user!: number | null;
  
    @Column(DataType.STRING(10000))
    logs_consulta!: string | null;
  
    @ForeignKey(() => Event)
    @Column(DataType.INTEGER)
    logs_id_evento!: number | null;
  
    @Default(DataType.NOW)
    @CreatedAt
    @Column(DataType.DATE)
    logs_fecha!: Date;
  }