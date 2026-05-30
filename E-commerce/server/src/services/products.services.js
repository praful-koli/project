import uploadImage from "../config/imagekit.js";
import productModel from "../models/products.model.js";
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


// Get product by id

// const getPorductByIdServices = async ({id}) => {
//     // ID validation
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(400).json({ error: "Invalid note ID" });
//     }
 
//     let product = await productModel.findById(id)
//     if (!product) {
        
//     }
//     return product

// }
export { createProductService, getAllProductsServices };
