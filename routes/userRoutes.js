import express, {Router}  from "express"
const router=express.Router()
import getDetails from '../controller/clientController.js'


router.get('/get',getDetails)



export default router