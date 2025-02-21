import { addUser, getAllUsers, getOneUserByid, updateOneUser, deleteUserByid} from "../controllers/user.controller.js";
import { Router } from 'express';

const userRouter=Router();

userRouter.route("/")
    .get(getAllUsers)
    .post(addUser)

userRouter.route("/users")
    .get(getAllUsers)
    .post(addUser)

userRouter.route("/users/:id")
    .get(getOneUserByid)
    .put(updateOneUser)
    .delete(deleteUserByid)


    
export default userRouter;
