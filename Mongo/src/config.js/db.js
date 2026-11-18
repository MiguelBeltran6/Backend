import mongoose from "mongoose";

async function conectarDB() {
    const uri = process.env.MONGO_URI;

    await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 5000,
    });
    console.log("Conectado a base de datos de MongoDB");
}