import {Schema, Types, model, models} from 'mongoose';
import {ITask} from '../utils/ModelInterfaces';
import User from '../models/User';
const TaskSchema = new Schema<ITask>({
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    status: { type: Boolean, default: false },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});
TaskSchema.path('userId').validate({
    validator: async function(userId) : Promise<boolean> {
        const user = await models.User.findOne({_id: userId});
        console.log(!!user);
        return !!user
    },
    message : "User not found"
})

export default model<ITask>("Task", TaskSchema);


