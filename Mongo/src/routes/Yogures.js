import Yogures from "./models/Yogures.js";
import {Router} from "express";

const router = Router();

router.get ("/", async (req, res)=>{
    const yogures = await Yogures.create(req.body);
    res.json(yogures);
});

export default router;