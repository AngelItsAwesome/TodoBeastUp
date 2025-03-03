import {Types} from 'mongoose'
export interface BodyTask{
    title: string,
    description: string;
    userId: string;
    priority: string;
}