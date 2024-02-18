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
exports.InMemoryTemaRepository = void 0;
class InMemoryTemaRepository {
    constructor() {
        this.temas = [];
    }
    save(tema) {
        return __awaiter(this, void 0, void 0, function* () {
            this.temas.push(tema);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.temas;
        });
    }
    findByUuid(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.temas.find(t => t.uuid === uuid) || null;
        });
    }
    findByMateriaUuid(materiaUuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.temas.filter(t => t.identificadorMateria === materiaUuid);
        });
    }
    updateStatus(uuid, estatus) {
        return __awaiter(this, void 0, void 0, function* () {
            const tema = yield this.findByUuid(uuid);
            if (tema) {
                tema.estatus = estatus;
            }
        });
    }
}
exports.InMemoryTemaRepository = InMemoryTemaRepository;
