import mongoose from "mongoose";
import uploadImage from "../config/imagekit.js";
import productModel from "../models/products.model.js";
import ApiError from "../utils/ApiError.js";
// Create product and upload multiple image using imagekit

const createProductService = async (product, images) => {
  console.log("product : ", product);
  console.log("images : ", images);

  // Upload all images to ImageKit
  let filesUploadUrl = await Promise.all(
    images.map(async (image) => {
      return await uploadImage(image.buffer, image.originalname);
    }),
  );

  // Save product with uploaded image URLs
  let newProduct = await productModel.create({
    ...product,
    images: filesUploadUrl.map((file) => file.url),
  });

  return newProduct;
};

// get all product & get product by category  
const getAllProductsServices = async ({ category }) => {

  // if category exists → filter, if not → empty object = get all
  let filter = {};

  if (category) {
    filter.category = category; // only added when category is given
  }
 
  //if categroy is there productModel onley fetch category product other wise featch all Produc
  const products = await productModel.find(filter);

  if (products.length === 0) {
    return res.status(404).json({
      success: false,
      message: category
        ? `No products found in category: ${category}`
        : "No products found",
    });
  }

  return products;
};


// Get product by id services
const getPorductByIdServices = async (id) => {
    // ID validation
    if (!mongoose.Types.ObjectId.isValid({id})) {
        throw new ApiError(400 , 'Invalid ID')
  
    }
   
    // validaiton pass get product by id

    let product = await productModel.findById(id)

    if (!product) {
        throw new ApiError(404 , "Product Not found")
    }

    return product

}


// update product servieces

const updateProductServices = async (productData , images , id) => {

    // check id is valid
    if(!mongoose.Types.ObjectId.isValid({id})) {
        throw new ApiError (400, "Invalid ID")
    }
     
    let product = await productModel.findById(id)

    if (!product) {
        throw new ApiError ( 404 , 'Product Not Found')
    }
   
    // upload images to imagekit

    let filesUploadUrl = await Promise.all(images.map(async(image) => {
        return await uploadImage(image.buffer , image.originalname)
    }))

     // Update product 

     const updatedProduct = await productModel.findByIdAndUpdate(id ,{
        ...productData ,
        images :filesUploadUrl.map((img) => img.url)
     } , {
        new:true, runValidators : true // return update product response
     })

    return updatedProduct
}

// delete single porduct servieces 
const deleteProductServices = async (id) => {
  
    // check id is valid or ot
    if (!mongoose.Types.ObjectId.isValid({id})) {
        throw new ApiError (400, "Invalid Id")
    }

    // validation pass then check the product is exist

    const product = await productModel.findById(id)

    if (!product) {
        throw new ApiError(404 , "Product Not Found")
    }
   
    // Delelte product
     await productModel.findByIdAndDelete(id)
}


export { createProductService , getAllProductsServices  , getPorductByIdServices , updateProductServices , deleteProductServices};
