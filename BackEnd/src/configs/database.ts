const mongoose = require('mongoose');

export const connectDB = async function (): Promise<void> {
    try{
        console.log("Connecting");
        await mongoose.connect("mongodb://127.0.0.1:27017/Todo", { useNewUrlParser: true })

    }catch(error){
        console.error(error)
        process.exit(1)
    }
}