import express, {Router}  from "express"
const router=express.Router()
import {getDetails,saveDetails,updateDetails,deleteDetails} from '../controller/clientController.js'


router.get('/get',getDetails)
router.post('/save',saveDetails)
router.put('/update/:id',updateDetails)
router.delete("/delete/:id",deleteDetails)



export default router