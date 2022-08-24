"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_fields_1 = require("../middleware/validator-fields");
const place_controller_1 = require("../controller/place-controller");
const placeRouter = (0, express_1.Router)();
placeRouter.get("/", place_controller_1.getPlaces);
placeRouter.get("/:id", place_controller_1.getPlace);
placeRouter.post("/", [
    //check("email","the email it's not valid ").isEmail(),
    //check("name","the name is required").not().isEmail(),
    //check("password","the password is not required and must have 6 letters").isLength({min:6}),
    //validate the rol to a list i give 
    /*  check("rol","the role is not valid").isIn(["ADMIN_ROLE","Place_ROLE"]), */
    ////validate the rol with a datebase in mongo
    //check("rol").custom(rol => validatorRole(rol)),
    //check("email").custom(email => validatorEmail(email)),
    validator_fields_1.validatorField
], place_controller_1.createPlace);
placeRouter.put("/:id", [
    //check("id","the id is not valid").isMongoId(),
    //check("id").custom(id=>validaotorMongoId(id)),
    //check("rol").custom(rol => validatorRole(rol)),
    validator_fields_1.validatorField
], place_controller_1.updatePlace);
placeRouter.delete("/:id", [
    //validateJWT,
    //check("id","the id is not valid").isMongoId(),
    //check("id").custom(id=>validaotorMongoId(id)),
    //check("rol").custom(rol => validatorRole(rol)),
    //check("rol").isString().withMessage("ADMIN_ROLE"),
    validator_fields_1.validatorField
], place_controller_1.deletePlace);
exports.default = placeRouter;
//# sourceMappingURL=place-routes.js.map