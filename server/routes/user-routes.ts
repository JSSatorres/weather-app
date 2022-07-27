import {Router} from 'express'
import { check } from 'express-validator';
import { validatorField } from '../middleware/validator-fields';

import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controller/user-controller';
import { validatorRole,validatorEmail } from '../helpers/db-validators';


const userRouter = Router()

userRouter.get("/",getUsers)

userRouter.get("/:id",getUser)

userRouter.post("/",[
    check("email","the email it's not valid ").isEmail(),
    check("name","the name is required").not().isEmail(),
    check("password","the password is not required and must have 6 letters").isLength({min:6}),
    //validate the rol to a list i give 
    /*  check("rol","the role is not valid").isIn(["ADMIN_ROLE","USER_ROLE"]), */
    //validate the rol with a datebase in mongo
    check("rol").custom(rol => validatorRole(rol)),
    check("email").custom(email => validatorEmail(email)),
    validatorField
],createUser)

userRouter.put("/:id",updateUser)

userRouter.delete("/:id",deleteUser)

export default userRouter;