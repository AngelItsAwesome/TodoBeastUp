import {Types, Document} from 'mongoose'

export interface ITask extends Document{
    _id : Types.ObjectId;
    title: string;
    description : string;
    createdAt : Date;
    status: boolean;
    priority: string;
    userId: Types.ObjectId;
}