import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    Default,
  } from 'sequelize-typescript';
  import { Room } from './rooms.model'; // Assuming you have a room model
  import { Event } from './event.model'; // Assuming you have an Evento model
  
  @Table({ tableName: 'espacios_cruces', timestamps: false })
  export class EventDate extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    cruces_id!: number;
  
    // @ForeignKey(() => Room)
    // @Column(DataType.INTEGER)
    // cruces_room_id!: number | null;
  
    @ForeignKey(() => Event)
    @Column(DataType.INTEGER)
    cruces_evento_id!: number | null;
  
    @Column(DataType.DATE)
    cruces_fecha!: Date | null;
  
    @Column(DataType.DATE)
    cruces_fecha_inicio!: Date | null;
  
    @Column(DataType.DATE)
    cruces_fecha_fin!: Date | null;
  
    @Column(DataType.TIME)
    cruces_hora_inicio!: string | null;
  
    @Column(DataType.TIME)
    cruces_hora_fin!: string | null;
  
    @Column(DataType.SMALLINT)
    cruces_domingo!: number | null;
  
    @Column(DataType.SMALLINT)
    cruces_lunes!: number | null;
  
    @Column(DataType.SMALLINT)
    cruces_martes!: number | null;
  
    @Column(DataType.SMALLINT)
    cruces_miercoles!: number | null;
  
    @Column(DataType.SMALLINT)
    cruces_jueves!: number | null;
  
    @Column(DataType.SMALLINT)
    cruces_viernes!: number | null;
  
    @Column(DataType.SMALLINT)
    cruces_sabado!: number | null;
  
    @Default(0)
    @Column(DataType.TINYINT)
    cruces_feriado!: number;
  }
  