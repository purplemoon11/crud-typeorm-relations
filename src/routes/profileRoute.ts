import { Router } from "express";
import { profileController } from "../controller/profileController";
const router = Router()

router.post('/createProfile', profileController.makeProfile)
router.get('/getProfile', profileController.getProfile)
router.get('/getProfileById/:id', profileController.getProfileById)
router.put('/updateProfile/:id', profileController.updateProfile)
router.delete('/deleteProfile/:id', profileController.deleteProfile)

module.exports = router