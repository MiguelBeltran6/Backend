import express from "express";
import yoguresRouter from "./routes/Yogures.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Tienda de yogures"})
})
app.use("/api/yogures", yoguresRouter);

export default app;