import { USER } from "../module/users";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { autoInc } from "../../../controllers/Counter";
import Db from '../../../controllers/core/Db';

class User {

    /**
     * we instanciate database class with mongoose 
     * user model to make all our operations only 
     * in this model
     */
    private user = new Db(USER);

    //Protected methods

    /**
     * 
     * @param id 
     * @returns { object }
     */
    // protected findUserById = (id : string) => this.user.getOneField("id", id);

    /**
     * 
     * @param { email }
     * @returns { object }
     */
    protected findUserByEmail = (email : string, cb: ( r : any )=> any) => this.user.getOneField("email", email, cb)

    /* 
     to save User in ittyni db must have 4 fields :
         email
         username
         password
         and generated ittyni code    
    */

    //Login Methods
    applyToAuthentify = async (args: any) => {

        const user = await USER.findOne({ email: args.userInput.email });

        if (!user) throw new Error("There is no user with this email");

        const isEqual = bcrypt.compare(args.userInput.password, user.password);

        if (!isEqual) throw new Error("Password does not match!!");

        const token = jwt.sign({ userId: user._id, email: user.email }, 'mysuperTokenlogin', {
            expiresIn: '1h'
        })

        return {
            userId: user.id,
            token: token,
            tokenExpired: 1
        };
    };

    applyForSignup = ({ userInput }: any) =>
        USER
            .findOne({ email: userInput.email })
            .then(user => {

                if (user) throw new Error("user already exists !!!")
                if(userInput.password !== userInput.ConfirmPassword) 
                    throw new Error("password doesn't mtach")
                return bcrypt.hash(userInput.password, 12)
            })
            .then(async (hashPassword) => {
                const count : number= await autoInc();

                if(count){
                    const User = new USER({
                        email: userInput.email,
                        password: hashPassword,
                        code: count,
                        createdAt: new Date()
                    }) 

                    const newUser = await User.save();

                        return newUser;
                }     
            })
            .then((newUser : any) => ({
                token : jwt.sign({ userId: newUser._id, email: newUser.email }, 'mysuperTokenlogin', {
                    expiresIn: '1h'
                }),
                tokenExpired : 1
            }))
            .catch((err: any) => { throw err });

    getUserRole = async (id : string) => {

        const user = await USER.findById(id);

        if(!user) throw new Error("User Not Found");

        const role = user.email;
        
        return role; 
    }

    verifyAuthById = async (userId : string) => {

        // const res = await this.findUserById(userId);

        // if(!res) throw new Error("User not found");

        // console.log(res)

    }

    getUserProfile = async ({ token } : any)=>{

        let decodeToken : decodeToken | any = jwt.decode(token);

        if(decodeToken){

            const { email } = decodeToken;

            const profile = await this.findUserByEmail(email, (r)=>r);
            
            if(profile){

                return {

                    _id : profile._id, 
                    email : profile.email,
                    password : profile.password
                }

            } else {
                throw new Error("there is no profile match this user")
            }
        } else {
            throw new Error("token not valid");
        }
    }

    findAllUsers = () => {
        return USER.find()
            .then((users: any[]) => {
                return users.map((user: any) => {
                    return {
                        ...user._doc,
                        _id: user._doc._id.toString()
                    }
                })
            })
    }
}

export const userFunc = new User();

export default User;