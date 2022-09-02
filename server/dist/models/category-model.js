"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: [true, "the name is reqired"],
    },
    state: {
        type: Boolean,
        default: true,
        required: true
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    }
});
exports.default = (0, mongoose_1.model)("Category", CategorySchema);
//# sourceMappingURL=category-model.js.map