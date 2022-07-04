import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from '../entity/User'

const data = AppDataSource.getRepository(User);

export class UserController{
    static makeUser = async (req: Request, res: Response)=>{
        const makeData = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,    
                age: req.body.age,
                email: req.body.email
        }
        const makeResult = await data.save(makeData)
        res.status(200).send({message: "User created successfully !!!", data: makeResult})
    }

    static getUser = async (req: Request, res: Response)=>{
        const getData = await data.find()
        res.status(200).send(getData)
    }

    static getUserById = async (req: Request, res: Response)=>{
        const id = (req.params.id);
        const getById = await data.findOneById(id)
        res.status(200).send(getById)
    }
    static updateUser = async (req: Request, res: Response)=>{
        const id = req.params.id
        const updateData = await data.update(id, req.body)
        res.status(200).send({message: "User update successfully !!!", updateData})
        console.log(updateData)
    }
    static deleteUser = async (req: Request, res: Response)=>{
        const id = req.params.id
        const deleteData = await data.delete(id)
        res.status(200).send({message: "User deleted successfully !!!", deleteData})
    }
}