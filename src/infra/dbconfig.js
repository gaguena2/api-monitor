import mongoose from "mongoose";

export const dbConfig = () => {
    let user = process.env.USER_DB;
    let secret = process.env.SECRET_DB;
    let host = process.env.HOST_DB;
    let database = process.env.DATABASE;

    mongoose.connect(`mongodb://${user}:${secret}@${host}:27017/${database}?authSource=admin`);
}
