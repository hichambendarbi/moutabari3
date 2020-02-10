"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    code: Number,
    account: {
        type: {
            typeCode: { type: Number },
            typeName: { type: String },
        }
    },
    createdAt: Date
});
exports.USER = mongoose_1.model("USER", UserSchema);
