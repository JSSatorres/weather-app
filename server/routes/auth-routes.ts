import {Router} from 'express'
import { check } from 'express-validator';
import { validatorField } from '../middleware/validator-fields';

/* import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controller/user-controller'; */
import { validatorRole,validatorEmail,validaotorMongoId } from '../helpers/db-validators';
import { login } from '../controller/auth-controller';


const authRouter = Router()
/* 
authRouter.get("/",getUsers)

authRouter.get("/:id",getUser) */

authRouter.post("/login",[
    check("email","the email it's not valid ").isEmail(),
    // check("name","the name is required").not().isEmail(),
    check("password","the password is required ").not().isEmpty(),
    //validate the rol to a list i give 
//   check("rol","the role is not valid").isIn(["ADMIN_ROLE","USER_ROLE"]),
    //validate the rol with a datebase in mongo
    // check("rol").custom(rol => validatorRole(rol)),
    // check("email").custom(email => validatorEmail(email)),
    validatorField
],login)


/* authRouter.put("/:id",[
    check("id","the id is not valid").isMongoId(),
    check("id").custom(id=>validaotorMongoId(id)),
    check("rol").custom(rol => validatorRole(rol)),
    validatorField
],updateUser)
 */
/* authRouter.delete("/:id",[
    check("id","the id is not valid").isMongoId(),
    check("id").custom(id=>validaotorMongoId(id)),
    check("rol").custom(rol => validatorRole(rol)),
    validatorField
],deleteUser) */

export default authRouter;