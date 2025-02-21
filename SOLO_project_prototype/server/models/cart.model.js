import { model, Schema } from "mongoose";
import {ProductSchema} from   "./product.model"


const CartSchema = new Schema(
    
    {
   
    userId: {
        type: Schema.Types.Number,
        ref: User,
        required: true
    },


    cartProduct:{
        type: [ProductSchema] 

    },

    date: {
        type: Date,
        required: true
    },
    
   
    quantity: {
    type: Number,
    required: true
            }
})


const Cart = model('Cart', CartSchema)
export default Cart;






// 1.) your cart model is gonna need to store a list of products for a specific user.
//  When adding to the cart first check if a cart already exists for that user, 
// if it does update the existing cart for the user if it does create a new one