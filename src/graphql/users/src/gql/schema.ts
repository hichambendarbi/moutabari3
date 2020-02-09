import { buildSchema } from "graphql";



export const UserSchema = buildSchema(`

    type User {
        _id : ID!
        email : String!
        password : String!
    }

    type UserAuth {
        userId : String!
        token : String!
        tokenExpired : Int!
    }

    type UserSession {
        token : String!
        tokenExpired : Int!
    }

    input UserInput {
        email : String!
        password : String!
    }

    input UserSignUp {
        email : String!
        password : String!
        ConfirmPassword : String!
    }

    type RootQuery {
        users : [User!]!
        login(userInput: UserInput) : UserAuth!
        userProfile(token : String ) : User
    }

    type RootMutation {
        createNewUser(userInput : UserSignUp) : UserSession
    }

    schema {
        query : RootQuery
        mutation : RootMutation
    }
`)