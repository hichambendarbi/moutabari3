"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("../controllers/user"));
var user = new user_1.default();
exports.userResolver = {
    users: user.findAllUsers,
    login: user.applyToAuthentify,
    createNewUser: user.applyForSignup,
    userProfile: user.getUserProfile
};
