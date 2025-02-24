import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, AllowNull } from 'sequelize-typescript';

@Table({tableName: 'espacios_edificios', timestamps:false}) export class Building extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    edificios_id!: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: true,
        defaultValue: null,
    })
    edificios_nombre!: string | null; 

    @Column({
        type: DataType.STRING(255),
        allowNull: true,
        defaultValue: null,
    })
    edificios_telefono!: string  | null;

     @Column({
        type: DataType.STRING(255),
        allowNull: true,
        defaultValue: null
     })
     edificios_direccion!: string | null;

     @Column({
        type: DataType.STRING(255),
        allowNull: true,
        defaultValue: null,
     })
     edificios_abreviatura!: string | null;
}