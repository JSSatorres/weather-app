"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validator_fields_1 = require("../middleware/validator-fields");
const auth_controller_1 = require("../controller/auth-controller");
const validator_jwt_1 = require("../middleware/validator-jwt");
const authRouter = (0, express_1.Router)();
/*
authRouter.get("/",getUsers)

authRouter.get("/:id",getUser) */
authRouter.post("/login", [
    (0, express_validator_1.check)("email", "the email it's not valid ").isEmail(),
    // check("name","the name is required").not().isEmail(),
    (0, express_validator_1.check)("password", "the password is required ").not().isEmpty(),
    //validate the rol to a list i give 
    //   check("rol","the role is not valid").isIn(["ADMIN_ROLE","USER_ROLE"]),
    //validate the rol with a datebase in mongo
    // check("rol").custom(rol => validatorRole(rol)),
    // check("email").custom(email => validatorEmail(email)),
    validator_jwt_1.validateJWT,
    validator_fields_1.validatorField
], auth_controller_1.login);
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
exports.default = authRouter;
//# sourceMappingURL=auth-routes.js.map