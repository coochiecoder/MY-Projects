import Cart from "../models/cart.model.js";
import {ProductSchema} from  "../models/product.model.js"

export const addCart = async (req, res, next) => {
  const { userId, productId } = req.body;

  try {
    // Check if the cart exists for the user
    let cart = await Cart.findOne({ userId });

    if (cart) {
      // Cart exists, check if the product is already in the cart
      const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);

      if (productIndex > -1) {
        // Product exists in cart, update the quantity or any other logic
        cart.products[productIndex].quantity += 1; // Example update
      } else {
        // Product doesn't exist in cart, add it
        cart.products.push({ productId, quantity: 1 }); // Example addition
      }

      // Save the updated cart
      await cart.save();
      res.status(200).json(cart);
    } else {
      // Cart doesn't exist, create a new one
      const newCart = new Cart({
        userId,
        products: [{ productId, quantity: 1 }] // Example product addition
      });

      await newCart.save();
      res.status(201).json(newCart);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// Check if the cart exist for this user id using the .find
// find the product by the id so send back the user id and the product id 
// check if a cart was found with a if statement and if false create a new cart and if true used the updateOneCart method
// 




export const getAllCarts = async (req, res, next) => {
  try {
    const RES = await Cart.find();
    res.status(200).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const getOneCartByid = async (req, res, next) => {
  const { id } = req.params
  try {
    const RES = await Cart.findById(id);
    res.status(200).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const updateOneCart = async (req, res, next) => {
  const { userId, productId } = req.body;
  const options = {
    new: true,
    runValidators: true,
  };

  try {
    // Find the cart for the user
    let cart = await Cart.findOne({ userId });

    if (cart) {
      // Cart exists, check if the product is already in the cart
      const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);

      if (productIndex > -1) {
        // Product exists in cart, update the quantity or other fields
        cart.products[productIndex].quantity += req.body.quantity || 1; // Example: increment quantity
        cart.products[productIndex] = { ...cart.products[productIndex], ...req.body }; // Update other fields
      } else {
        // Product doesn't exist in cart, add it
        cart.products.push({ productId, quantity: req.body.quantity || 1, ...req.body });
      }

      // Save the updated cart
      const updatedCart = await cart.save();
      res.status(200).json(updatedCart);
    } else {
      // Handle case where cart does not exist
      res.status(404).json({ message: "Cart not found for the user" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};




export const deleteCartByid = async (req, res, next) => {
  const { id } = req.params
  try {
    const RES = await Cart.findByIdAndDelete(id)
    res.status(200).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}



