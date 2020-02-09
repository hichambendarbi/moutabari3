import {Schema, model, Document} from 'mongoose';

interface IUserModel extends Document {
    email : UserEmail
    password : UserPassword
    createdAt : UserCreatedAt
    account : Account
}

const UserSchema : Schema = new Schema({

    email : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    code : Number,

    account : {

        type : {

            typeCode : { type : Number },
    
            typeName : { type : String},
        }
    },

    createdAt : Date
})

export const USER =  model<IUserModel>("USER", UserSchema)