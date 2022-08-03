"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validator_fields_1 = require("../middleware/validator-fields");
const user_controller_1 = require("../controller/user-controller");
const db_validators_1 = require("../helpers/db-validators");
const validator_jwt_1 = require("../middleware/validator-jwt");
const userRouter = (0, express_1.Router)();
userRouter.get("/", user_controller_1.getUsers);
userRouter.get("/:id", user_controller_1.getUser);
userRouter.post("/", [
    (0, express_validator_1.check)("email", "the email it's not valid ").isEmail(),
    (0, express_validator_1.check)("name", "the name is required").not().isEmail(),
    (0, express_validator_1.check)("password", "the password is not required and must have 6 letters").isLength({ min: 6 }),
    //validate the rol to a list i give 
    /*  check("rol","the role is not valid").isIn(["ADMIN_ROLE","USER_ROLE"]), */
    //validate the rol with a datebase in mongo
    (0, express_validator_1.check)("rol").custom(rol => (0, db_validators_1.validatorRole)(rol)),
    (0, express_validator_1.check)("email").custom(email => (0, db_validators_1.validatorEmail)(email)),
    validator_fields_1.validatorField
], user_controller_1.createUser);
userRouter.put("/:id", [
    (0, express_validator_1.check)("id", "the id is not valid").isMongoId(),
    (0, express_validator_1.check)("id").custom(id => (0, db_validators_1.validaotorMongoId)(id)),
    (0, express_validator_1.check)("rol").custom(rol => (0, db_validators_1.validatorRole)(rol)),
    validator_fields_1.validatorField
], user_controller_1.updateUser);
userRouter.delete("/:id", [
    validator_jwt_1.validateJWT,
    (0, express_validator_1.check)("id", "the id is not valid").isMongoId(),
    (0, express_validator_1.check)("id").custom(id => (0, db_validators_1.validaotorMongoId)(id)),
    //check("rol").custom(rol => validatorRole(rol)),
    (0, express_validator_1.check)("rol").isString().withMessage("ADMIN_ROLE"),
    validator_fields_1.validatorField
], user_controller_1.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=user-routes.js.map