import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Profile } from "../entity/Profile";

const data = AppDataSource.getRepository(Profile) 

export class profileController{
    static makeProfile = async (req: Request, res: Response)=>{
       
        const createPrfile = {
            username: req.body.username,
            address: req.body.address,
            password: req.body.password,
            user: req.body.user
        }

        const result = await data.save(createPrfile)
        res.status(200).send({message:"Profile created successfully !!!", data: result})
    }

    static getProfile = async (req: Request, res: Response)=>{
        const getData = await data.find({
            relations: {
                user: true,
            },
        })
        res.status(200).send(getData)
    }

    static getProfileById = async (req: Request, res: Response)=>{
        const id = req.params.id
        const getById = await data.findOneById(id)
        res.status(200).send(getById)
    }

    static updateProfile = async (req: Request, res: Response)=> {
        const id = req.params.id
        const updateData = await data.update(id, req.body)
        res.status(200).send({message: "Profile updated succecssfully", data: updateData})
    }

    static deleteProfile = async (req: Request, res: Response)=>{
        const id = req.params.id
        const deleteData = await data.delete(id)
        res.status(200).send({message: "Data deleted successfully !!!"})
        console.log(deleteData)
    }
}