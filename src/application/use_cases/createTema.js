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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTema = void 0;
const tema_1 = require("../../domain/entities/tema"); // Importar la clase Tema
class CreateTema {
    constructor(temaRepository) {
        this.temaRepository = temaRepository;
    }
    execute(uuid, nombre, estatus, identificadorMateria) {
        return __awaiter(this, void 0, void 0, function* () {
            const tema = new tema_1.Tema(uuid, nombre, estatus, identificadorMateria);
            yield this.temaRepository.save(tema);
        });
    }
}
exports.CreateTema = CreateTema;
