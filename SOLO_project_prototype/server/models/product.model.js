import { model, Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    
    title: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    
    category: {
      type: String,  
      required: true,
    },
    
    description: {
      type: String,
    }, 

    image: {
      type: String,
    },
     

  },
  { timestamps: true }
);

const Product = model("Product", ProductSchema);

export default {Product, ProductSchema};
