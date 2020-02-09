// var userHandler = require('./users/handler');
var graphqlHTTP = require("./node_modules/express-graphql");
var { buildSchema } = require("./node_modules/graphql");


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