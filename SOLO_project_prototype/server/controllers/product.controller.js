import Product from "../models/product.model.js";

export const addProduct = async (req, res, next) => {
  try {
    const RES = await Product.create(req.body);
    res.status(201).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const getAllProducts = async (req, res, next) => {
  try {
    const RES = await Product.find();
    res.status(200).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const getOneProductByid = async (req, res, next) => {
  const { id } = req.params
  try {
    const RES = await Product.findById(id);
    res.status(200).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const updateOneProduct = async (req, res, next) => {
  const { id } = req.params
  const options = {
    new: true,
    runValidators: true,
  };
  try {
    const RES = await Product.findByIdAndUpdate(
      id,
      req.body,
      options
    );
    res.status(200).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const deleteProductByid = async (req, res, next) => {
  const { id } = req.params
  try {
    const RES = await Product.findByIdAndDelete(id)
    res.status(200).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

