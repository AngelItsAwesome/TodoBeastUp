const mongoose = require('mongoose');

export const connectDB = async function (): Promise<void> {
    try{
        console.log("Connecting");
        await mongoose.connect("mongodb://localhost:27017/Todo", { useNewUrlParser: true })

    }catch(error){
        console.error(error)
        process.exit(1)
    }
}