var { buildSchema } = require("graphql");


exports.UserSchema = buildSchema(`

    type rootQuery {
        message : String
    }

    schema {
        query : rootQuery
    }

`)

