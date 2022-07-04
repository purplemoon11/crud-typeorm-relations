import "reflect-metadata"
import { DataSource } from "typeorm"
import { Items } from "./entity/Items"
import { Payment } from "./entity/Payment"
import { Profile } from "./entity/Profile"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root" ,
    password: "",
    database: "shoppingitems",
    synchronize: true,
    logging: false,
    entities: [User, Items, Payment, Profile],
    migrations: [],
    subscribers: [],
})
