import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Items {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Cloting: string

    @Column()
    Fooding: string

    @Column()
    Accessories: string

    @ManyToOne(()=>User)
    user: User
}