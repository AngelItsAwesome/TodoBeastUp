import {Types, Document} from 'mongoose'

export interface ITask extends Document{
    _id : Types.ObjectId;
    description : string;
    createdAt : Date;
    status: boolean;
    userId: Types.ObjectId;
}