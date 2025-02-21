import { Router } from "express";
import { addProduct, getAllProducts, getOneProductByid, updateOneProduct, deleteProductByid, } from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.route("/products")
    .get(getAllProducts)
    .post(addProduct);

productRouter.route("/products/:id")
    .get(getOneProductByid)
    .put(updateOneProduct)
    .delete(deleteProductByid);

export default productRouter;
