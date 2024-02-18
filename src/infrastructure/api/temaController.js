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
exports.temaController = void 0;
// src/infrastructure/api/temaController.ts
const express_1 = __importDefault(require("express"));
const createTema_1 = require("../../application/use_cases/createTema");
const listTemasByMateria_1 = require("../../application/use_cases/listTemasByMateria");
function temaController(temaRepository) {
    const router = express_1.default.Router();
    const createTemaUseCase = new createTema_1.CreateTema(temaRepository);
    const listTemasByMateriaUseCase = new listTemasByMateria_1.ListTemasByMateria(temaRepository);
    router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { uuid, nombre, estatus, identificadorMateria } = req.body;
        try {
            yield createTemaUseCase.execute(uuid, nombre, estatus, identificadorMateria);
            res.status(201).send({ message: 'Tema created successfully' });
        }
        catch (error) {
            res.status(500).send(error);
        }
    }));
    router.get('/materia/:materiaUuid', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { materiaUuid } = req.params;
        try {
            const temas = yield listTemasByMateriaUseCase.execute(materiaUuid);
            res.status(200).send(temas);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }));
    return router;
}
exports.temaController = temaController;
