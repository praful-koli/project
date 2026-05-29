import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  name:        { type: String, required: true , trim: true },
  description: { type: String ,trim: true },
  price:       { type: Number, required: true },
  category:    { type: String },
  images:      [{ type: String }]   // array of image URLs/filenames
}, { timestamps: true });

const productModel = mongoose.model('products' , productSchema)

export default productModel