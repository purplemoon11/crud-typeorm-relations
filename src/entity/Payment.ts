import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { User } from "./User";

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    card: number

    @Column()
    cash: number

    @Column()
    onlineTransaction: number

    @ManyToMany(()=> User)
    user: User[]
}