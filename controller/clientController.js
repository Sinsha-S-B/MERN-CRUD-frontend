
import clientModel from  "../model/clientModel.js"

const getDetails=async(req,res)=>{
    try {
        // const name=await clientModel.find()
        // res.send(name)
        res.send("hai")
        
    } catch (error) {
        console.log({error});
        
    }
}
export default getDetails