import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Payment } from "../entity/Payment";

    const data = AppDataSource.getRepository(Payment)

export class PaymentController{
    static createPayment = async (req: Request, res: Response) => {
        const createData = {
            card: req.body.card,
            cash: req.body.cash,
            onlineTransaction: req.body.onlineTransaction,
            user: req.body.user 
        }
        const result = await data.save(createData)
        res.status(200).send(result)
    }

    static getPaymentById = async (req: Request, res: Response) => {
        const id = req.params.id;
        if(id){
            const result = await data.findOneById(id)
            res.status(200).send(result)
        }
        else{
            const datas = await data.find()
            res.status(200).send(datas)
        }
    }
}