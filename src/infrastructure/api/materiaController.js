"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.materiaController = void 0;
const express_1 = __importDefault(require("express"));
const createMateria_1 = require("../../application/use_cases/createMateria");
const listMaterias_1 = require("../../application/use_cases/listMaterias");
function materiaController(materiaRepository) {
    const router = express_1.default.Router();
    const createMateriaUseCase = new createMateria_1.CreateMateria(materiaRepository);
    const listMateriasUseCase = new listMaterias_1.ListMaterias(materiaRepository);
    router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { uuid, nombre, carrera, estatus } = req.body;
        try {
            yield createMateriaUseCase.execute(uuid, nombre, carrera, estatus);
            res.status(201).send({ message: 'Materia created successfully' });
        }
        catch (error) {
            res.status(500).send(error);
        }
    }));
    router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const materias = yield listMateriasUseCase.execute();
            res.status(200).send(materias);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }));
    return router;
}
exports.materiaController = materiaController;
