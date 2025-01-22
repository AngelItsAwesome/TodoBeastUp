import {models} from "mongoose";
import {Schema, model} from "mongoose";

interface IUser{
    username: string;
    email: string;
    password: string;
    celphone: string;
    verified: boolean;
    token: string;
    createdAt: Date;
}
const UserSchema = new Schema<IUser>({
    username: { type: String, required: [true, "Username is required"] },
    email: { type: String, required: [true, "Email is required"] },
    password: { type: String, required: [true, "Password is required"] },
    celphone: { type: String, required: [true, "Celphone is required"] },
    verified: {type: Boolean, default: false},
    token: String,
    createdAt: { type: Date, default: Date.now },
})

UserSchema.path('email').validate({
    validator: async function(email) {
        const user = await models.User.findOne({email});
        return !user;
    },
    message: `The user already exists!`,
})

UserSchema.path('username').validate({
    validator: async function(username) {
        return username.length < 12;
    },
    message: `The username length cant be greater than 12 characters!!`,
})
UserSchema.path('password').validate({
    validator: async function(password) {
        return password.length < 6;
    },
    message: `password cant be less than 6 characters!!`,
});

export default model<IUser>('User', UserSchema)
