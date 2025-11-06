import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://estella_db_user:101104@cluster0.syjyzww.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}