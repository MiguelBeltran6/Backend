import Yogur from "../models/yogures.js";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res, next) => {
    try {
        res.json(await Yogur.find());
    } catch (error) {
        next(error);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const yogur = await Yogur.findById(req.params.id);
        if (!yogur) {
            return res.status(404).json({ message: "Yogur no encontrado" });
        }
        res.json(yogur);
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        res.status(201).json(await Yogur.create(req.body));
    } catch (error) {
        next(error);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const yogur = await Yogur.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!yogur) {
            return res.status(404).json({ message: "Yogur no encontrado" });
        }
        res.json(yogur);
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const yogur = await Yogur.findByIdAndDelete(req.params.id);
        if (!yogur) {
            return res.status(404).json({ message: "Yogur no encontrado" });
        }
        res.status(204).send();
    } catch (error) {
        next(error);
    }
});

router.use((error, req, res, next) => {
    if (error.name === "ValidationError") {
        return res.status(400).json({
            message: "Datos invalidos",
            errors: Object.values(error.errors).map((item) => item.message)
        });
    }
    if (error.name === "CastError") {
        return res.status(400).json({ message: "ID invalido" });
    }
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
});

export default router;