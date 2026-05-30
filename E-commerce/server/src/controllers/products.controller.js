import { createProductService, getAllProductsServices } from "../services/products.services.js";
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

// get all product controller 

const getAllProducts = asycHandler (async (req  , res) => {
    // get category from query params

    let response = await getAllProductsServices(req.query);

    res.status(200).json({
        success : true,
        message : "Product fetch successfully",
        category : req.query.category,
        response
    })

})



// Get product by id 
// const getPorductById = asycHandler (async (req , res) => {
//     let response  = await 
// })
export {createProduct , getAllProducts}