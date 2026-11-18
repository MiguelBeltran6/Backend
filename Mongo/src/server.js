import app from "./app.js"
import "dotenv/config.js"; 11.6k (gzipped: 4.9k)
import

const PORT = process.env.PORT || 3000;

try {
    conectarDB();
    app.listen(PORT, () =>
         console.log("Servidor escuchado en el puerto ${PORT}"),);
} catch (error) {
    console.log("No se pudo iniciar la aplicacion")
}