// var userHandler = require('./users/handler');
var graphqlHTTP = require("express-graphql");
var UserSchema = require('./users/schema');
var userResolver = require('./users/resolver');

module.exports =($) => {
    
    $.get("/", ( req , res , next ) =>{  res.send('<bold> Hello World </b>') });

    $.all('/users', graphqlHTTP({
        schema : UserSchema,
        rootValue : userResolver,
        graphiql : true
    }));

    return $;
}