import dotenv from "dotenv";
import { fileURLToPath } from "node:url";
import app from "./app.js";
import conectarDB from "./config/db.js";

dotenv.config({
    path: fileURLToPath(new URL("./.env", import.meta.url))
});

const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
    try {
        await conectarDB();
        app.listen(PORT, () => {
            console.log(`Servidor escuchado en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error("No se pudo iniciar la aplicacion:", error.message);
        process.exitCode = 1;
    }
}

iniciarServidor();