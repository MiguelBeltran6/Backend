import mongoose from "mongoose";


const yogurSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        min: [7000, "El precio debe ser mayor a 7000"]
    },
    cantidadDisponible: {
        type: Number,
        required: true,
        min: [0, "La cantidad disponible no puede ser negativa"]
    },
    disponible: {
        type: Boolean,
        default: true
    },
    imagen: {
        type: String,
        trim: true,
        default: ""
    }
});

export default mongoose.model("Yogur", yogurSchema);