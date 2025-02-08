import {Types} from 'mongoose'
export interface BodyTask{
    description: String;
    userId: Types.ObjectId;
}