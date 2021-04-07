import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TodoStatusEnum } from "../enums/TodoStatusEnum";

@Entity('todo')
export class TodoEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({
        type: "varchar",
        length:50,
    })
    name: string;
    @Column({
        type: "varchar",
        length:255,
    })
    description: string;
    @Column({
        type: "date"
    })
    date: Date;
    @Column({
        type:'enum',
        enum: TodoStatusEnum,
        default: TodoStatusEnum.waiting

    })
    status: TodoStatusEnum;

}