const express = require('express');
const app = express();
const port = 3000;

app.get("/", (request, response) => {
    response.send("Hola de mi primer server")
})
app.get("/hola/:nombre/:apellido", (request, response) => {
const nombre = request.params.nombre;
const apellido = request.params.apellido;
    response.send("hola, " + nombre + apellido)
})


app.get("/despedir", (request, response) => {
const nombre = request.query.nombre;
const apellido = request.query.apellido;
    response.send("chao, " + nombre + apellido)
}) 
app.listen(3000, () => {
    console.log("Servidor ejecutandose des mi compu: http://localhost:3000")
})