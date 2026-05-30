import { createProductService, getAllProductsServices , getPorductByIdServices  ,updateProductServices , deleteProductServices} from "../services/products.services.js";
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



// Get product by id  controller
const getPorductById = asycHandler (async (req , res) => {

    let response  = await getPorductByIdServices(req.params.id)

    res.status(200).json({
        success : true,
        message : 'product fetch sucessfully',
        response
    })
})


// update product by id  controller
const updateProduct = asycHandler ( async (req , res) => {
   
   const response = await updateProductServices(req.body , req.files ,req.params.id)

   res.status(200).json({
        success : true,
        message : "Product update successfully",
        response
    })
})


// delelte product by id controller
const deleteProduct = asycHandler ( async (req ,res) => {
    const response = await deleteProductServices(req.params.id)

    res.status(200).json({
        success : true,
        message: "Product deleted successfully"
    })
})

export {createProduct , getAllProducts , getPorductById, updateProduct , deleteProduct}