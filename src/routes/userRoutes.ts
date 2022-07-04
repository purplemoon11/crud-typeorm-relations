import { Router } from "express";
import { UserController } from "../controller/userController";
const router = Router()

router.post('/createUser', UserController.makeUser)
router.get('/getUser', UserController.getUser)
router.get('/getUserById/:id', UserController.getUserById)
router.put('/updateUser/:id', UserController.updateUser)
router.delete('/deleteUser/:id', UserController.deleteUser)

module.exports = router;