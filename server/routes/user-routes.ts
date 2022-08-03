import {Router} from 'express'
import { check } from 'express-validator';
import { validatorField } from '../middleware/validator-fields';

import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controller/user-controller';
import { validatorRole,validatorEmail,validaotorMongoId } from '../helpers/db-validators';
import { validateJWT } from '../middleware/validator-jwt';


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

userRouter.put("/:id",[
    check("id","the id is not valid").isMongoId(),
    check("id").custom(id=>validaotorMongoId(id)),
    check("rol").custom(rol => validatorRole(rol)),
    validatorField
],updateUser)

userRouter.delete("/:id",[
    validateJWT,
    check("id","the id is not valid").isMongoId(),
    check("id").custom(id=>validaotorMongoId(id)),
    //check("rol").custom(rol => validatorRole(rol)),
    check("rol").isString().withMessage("ADMIN_ROLE"),
    
    validatorField
],deleteUser)

export default userRouter;