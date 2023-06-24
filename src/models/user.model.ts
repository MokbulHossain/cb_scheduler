import { Table, Column, Model, DataType,Sequelize, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({ tableName: 'customers' })

export class CustomerModel extends Model{
    @Column({
        type: DataType.BIGINT,
        autoIncrement : true,
        primaryKey : true
    })
    id: bigint;

    @Column({
        type: DataType.INTEGER
    })
    subid: number;

    @Column({
        type: DataType.TEXT
    })
    fcm:string

    @Column({
        type: DataType.TEXT
    })
    mobile: string;

}