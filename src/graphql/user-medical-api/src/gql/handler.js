"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_graphql_1 = __importDefault(require("express-graphql"));
var Schema = __importStar(require("./schema"));
var Resolver = __importStar(require("./resolver"));
exports.User = express_graphql_1.default({
    schema: Schema.UserSchema,
    rootValue: Resolver.userResolver,
    graphiql: true
});
