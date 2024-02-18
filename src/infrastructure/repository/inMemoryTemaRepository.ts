// src/infrastructure/repository/inMemoryTemaRepository.ts
import { Tema } from '../../domain/entities/tema';
import { TemaRepository } from '../../domain/ports/temaRepository';

export class InMemoryTemaRepository implements TemaRepository {
  private temas: Tema[] = [];

  async save(tema: Tema): Promise<void> {
    this.temas.push(tema);
  }

  async findAll(): Promise<Tema[]> {
    return this.temas;
  }

  async findByUuid(uuid: string): Promise<Tema | null> {
    return this.temas.find(t => t.uuid === uuid) || null;
  }

  async findByMateriaUuid(materiaUuid: string): Promise<Tema[]> {
    return this.temas.filter(t => t.identificadorMateria === materiaUuid);
  }

  async updateStatus(uuid: string, estatus: 'activo' | 'inactivo'): Promise<void> {
    const tema = await this.findByUuid(uuid);
    if (tema) {
      tema.estatus = estatus;
    }
  }
}
