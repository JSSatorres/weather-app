"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validator_fields_1 = require("../middleware/validator-fields");
const db_validators_1 = require("../helpers/db-validators");
const category_controller_1 = require("../controller/category-controller");
const categoryRouter = (0, express_1.Router)();
categoryRouter.get("/", category_controller_1.getCategories);
categoryRouter.get("/:id", category_controller_1.getCategory);
categoryRouter.post("/", [
    /* validateJWT,  */
    //check("name","the name is required").not().isEmail(),
    (0, express_validator_1.check)("name", "the name is required").not().isEmpty(),
    //validate the rol to a list i give 
    //check("rol","the role is not valid").isIn(["ADMIN_ROLE","USER_ROLE"]),
    //validate the rol with a datebase in mongo
    // check("rol").custom(rol => validatorRole(rol)),
    // check("email").custom(email => validatorEmail(email)),
    validator_fields_1.validatorField
], category_controller_1.createCategory);
categoryRouter.put("/:id", [
    (0, express_validator_1.check)("id", "the id is not valid").isMongoId(),
    (0, express_validator_1.check)("id").custom(id => (0, db_validators_1.validaotorMongoId)(id)),
    (0, express_validator_1.check)("rol").custom(rol => (0, db_validators_1.validatorRole)(rol)),
    validator_fields_1.validatorField
], category_controller_1.updateCategory);
categoryRouter.delete("/:id", [
    (0, express_validator_1.check)("id", "the id is not valid").isMongoId(),
    (0, express_validator_1.check)("id").custom(id => (0, db_validators_1.validaotorMongoId)(id)),
    (0, express_validator_1.check)("rol").custom(rol => (0, db_validators_1.validatorRole)(rol)),
    validator_fields_1.validatorField
], category_controller_1.deleteCategory);
exports.default = categoryRouter;
//# sourceMappingURL=category-routes.js.map