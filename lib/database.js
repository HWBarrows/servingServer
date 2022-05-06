import mongoose from "mongoose";

export function connect () {

    const connectionString = process.env.DB_CONNECT
    
    mongoose.connection.on('connecting', ()=> console.log("[DB] connecting"))
    mongoose.connection.on('connected', ()=> console.log("[DB] connected"))
    mongoose.connection.on('disconnecting', ()=> console.log("[DB] disconnecting"))
    mongoose.connection.on('disconnected', ()=> console.log("[DB], disconnected"))
    mongoose.connection.on('reconnected', ()=> console.log("[DB], reconnected"))
    mongoose.connection.on('error', er => console.log("[DB] error", er))

    mongoose.connect(connectionString, {useNewUrlParser: true})
}