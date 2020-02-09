var graphqlHTTP = require("express-graphql");
var UserSchema = require("./schema");
var userResolver = require("./resolver");

exports.userHandler = graphqlHTTP({
    schema : UserSchema,
    rootValue : userResolver,
    graphiql : true
});
