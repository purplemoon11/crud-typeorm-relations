import { Router } from "express";
import { PaymentController } from "../controller/paymentController";
const router = Router()

router.post('/createPayment', PaymentController.createPayment)

module.exports = router;