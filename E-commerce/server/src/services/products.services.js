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
        images : filesUploadUrl.map((file) => file.url )
    })

    return newProduct
};

export { createProductService };
