import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path: './.env'})

const DB_NAME = process.env.DB_NAME;    
const MONGO_URI = process.env.MONGO_DB_URI;
console.log(DB_NAME, MONGO_URI);
const connectDb = async ()=> {
    try {
        const connectionInstance = await mongoose.connect(`${MONGO_URI}/${DB_NAME}`);
        if(connectionInstance.connection.host == 'localhost'){
            console.log(`⚙️  MongoDB connected local server !! DB HOST: ${connectionInstance.connection.host}, DB Name: ${connectionInstance.connection.name}`);
        }else{
            console.log(`⚙️  MongoDB connected atlas server !! DB HOST: ${connectionInstance.connection.host}, DB Name: ${connectionInstance.connection.name}`); 
        } 
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);
        
    }
}

export default connectDb;