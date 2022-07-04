import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { User } from "./User"

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    address: string

    @Column()
    password: string

    @OneToOne(() => User)
    @JoinColumn()

    user: User

}