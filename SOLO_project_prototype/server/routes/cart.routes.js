import { Router } from "express";
import { addCart, getAllCarts, getOneCartByid, updateOneCart, deleteCartByid, } from "../controllers/cart.controller.js";

const cartRouter = Router();

cartRouter.route("/carts")
    .get(getAllCarts)
    .post(addCart);

cartRouter.route("/carts/:id")
    .get(getOneCartByid)
    .put(updateOneCart)
    .delete(deleteCartByid);

export default cartRouter;
