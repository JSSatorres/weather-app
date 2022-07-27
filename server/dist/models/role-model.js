"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RoleSchema = new mongoose_1.Schema({
    rol: {
        type: String,
        require: [true, "the rol is reqired"],
    },
});
exports.default = (0, mongoose_1.model)("Roles", RoleSchema);
//# sourceMappingURL=role-model.js.map