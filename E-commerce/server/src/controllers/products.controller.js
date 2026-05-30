import { createProductService } from "../services/products.services.js";
import asycHandler from "../utils/asycHandler.js";


// create product controller 

const createProduct = asycHandler ( async (req , res) => {
    const response  =  await createProductService(req.body , req.files)
   
    res.status(200).json({
        success : true,
        message : "Product create successfully",
        response
    })
})


export {createProduct}