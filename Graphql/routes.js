// var userHandler = require('./users/handler');
var graphqlHTTP = require("express-graphql");
var { buildSchema } = require("graphql");


var UserSchema = buildSchema(`

    type rootQuery {
        message : String
    }

    schema {
        query : rootQuery
    }

`);

var userResolver = ()=>{

    message : () => "Hello GraphQl"

}

module.exports =($) => {
    
    $.get("/", ( req , res , next ) =>{  res.send('<bold> Hello World </b>') });

    $.all('/users', graphqlHTTP({
        schema : UserSchema,
        rootValue : userResolver,
        graphiql : true
    }));

    return $;
}