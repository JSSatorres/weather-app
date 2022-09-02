import {Router} from 'express'
import { check } from 'express-validator';
import { validatorField } from '../middleware/validator-fields';


import { validatorRole,validatorEmail,validaotorMongoId } from '../helpers/db-validators';
import {getCategory,getCategories,updateCategory,deleteCategory,createCategory } from '../controller/category-controller';
import { validateJWT } from '../middleware/validator-jwt';



const categoryRouter :Router = Router()

categoryRouter.get("/",getCategories)

categoryRouter.get("/:id",getCategory) 

categoryRouter.post("/",[
    /* validateJWT,  */ 
    //check("name","the name is required").not().isEmail(),
    check("name","the name is required").not().isEmpty(),
    //validate the rol to a list i give 
    //check("rol","the role is not valid").isIn(["ADMIN_ROLE","USER_ROLE"]),
    //validate the rol with a datebase in mongo
    // check("rol").custom(rol => validatorRole(rol)),
    // check("email").custom(email => validatorEmail(email)),
    validatorField
],createCategory)


categoryRouter.put("/:id",[
    check("id","the id is not valid").isMongoId(),
    check("id").custom(id=>validaotorMongoId(id)),
    check("rol").custom(rol => validatorRole(rol)),
    validatorField
],updateCategory)
 
categoryRouter.delete("/:id",[
    check("id","the id is not valid").isMongoId(),
    check("id").custom(id=>validaotorMongoId(id)),
    check("rol").custom(rol => validatorRole(rol)),
    validatorField
],deleteCategory) 

export default categoryRouter;