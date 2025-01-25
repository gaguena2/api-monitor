import mongoose from "mongoose";

export const dbConfig = () => {
    mongoose.connect('mongodb://mongodb:Brasil04@localhost:27017/api_promo?authSource=admin');
}
