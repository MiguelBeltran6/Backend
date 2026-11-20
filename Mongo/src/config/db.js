import mongoose from "mongoose";

export default async function conectarDB() {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
        throw new Error("Falta definir MONGODB_URI en src/.env");
    }

    await mongoose.connect(mongoUri);
    console.log("Conexion a MongoDB establecida");
}
