import { Router } from "express";
import { itemController } from "../controller/itemController";
const router = Router()

router.post('/createItem', itemController.createItem)
router.get('/getAllItems', itemController.getAllItems)
router.get('/getItemsById/:id', itemController.getDataById)
router.put('/updateItem/:id', itemController.updateItems)
router.delete('/deleteItem/:id', itemController.deleteItem)

module.exports = router