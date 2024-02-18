"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const materiaController_1 = require("./infrastructure/api/materiaController");
const inMemoryMateriaRepository_1 = require("./infrastructure/repository/inMemoryMateriaRepository");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const materiaRepository = new inMemoryMateriaRepository_1.InMemoryMateriaRepository();
app.use('/materias', (0, materiaController_1.materiaController)(materiaRepository)); // asegúrate de que esto coincida con la exportación
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
