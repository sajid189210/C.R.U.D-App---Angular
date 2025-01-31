import mongoose, { Schema } from 'mongoose';
import argon2 from 'argon2';

export interface IUser {
    username: string;
    email: string;
    password: string;
}

const userSchema: Schema<IUser> = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const hashedPassword = await argon2.hash(this.password);
        this.password = hashedPassword;
        next();
    } catch (err: any) {
        next(err);
    }
});

const userModel = mongoose.model('User', userSchema);

export default userModel;