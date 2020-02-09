import User from '../controllers/user';

const user = new User();

interface myUser {
    email : string
    password : string
}
interface userInput extends myUser {}

interface args {
    userInput : userInput
}


export const userResolver = {
    users : user.findAllUsers,
    login : user.applyToAuthentify,
    createNewUser: user.applyForSignup,
    userProfile : user.getUserProfile
};