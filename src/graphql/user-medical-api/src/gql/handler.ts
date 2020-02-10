import graphqlHTTP from "express-graphql";
import * as Schema from './schema'
import * as Resolver from './resolver'



export const User = graphqlHTTP({
    schema : Schema.UserSchema,
    rootValue : Resolver.userResolver,
    graphiql : true
});