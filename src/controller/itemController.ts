import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Items } from "../entity/Items";

    const data = AppDataSource.getRepository(Items)

export class itemController {
    static createItem = async (req: Request, res: Response) => {
        const createData = {
            Cloting: req.body.Cloting,
            Fooding: req.body.Fooding,
            Accessories: req.body.Accessories,
            user: req.body.user
        }
        const result = await data.save(createData)
        res.status(200).send({message: "Items added successfully !!!", data: result})
    }

    static getAllItems = async (req: Request, res: Response) => {
        const getAllData = await data.find({
            relations: {
                user: true
            }
        })
        res.status(200).send(getAllData)
    }

    static getDataById = async (req: Request, res: Response) => {
        const id = req.params.id;
        const getById = await data.findOneById(id)
        res.status(200).send(getById)
    }

    static updateItems = async (req: Request, res: Response) => {
        const id = req.params.id
        const updateData = await data.update(id, req.body)
        res.status(200).send({message: "Items updated successfully", data: updateData})
    }

    static deleteItem = async (req: Request, res: Response) => {
        const id = req.params.id
        const deletedata = await data.delete(id)
        res.status(200).send({message: "Item deleted successfully !!!", data: deletedata})
    }
}