// src/infrastructure/repository/inMemoryMateriaRepository.ts
import { Materia } from '../../domain/entities/materia';
import { MateriaRepository } from '../../domain/ports/materiaRepository';

export class InMemoryMateriaRepository implements MateriaRepository {
  private materias: Materia[] = [];

  async save(materia: Materia): Promise<void> {
    this.materias.push(materia);
  }

  async findAll(): Promise<Materia[]> {
    return this.materias;
  }

  async findByUuid(uuid: string): Promise<Materia | null> {
    return this.materias.find(m => m.uuid === uuid) || null;
  }

  async updateStatus(uuid: string, estatus: 'activo' | 'inactivo'): Promise<void> {
    const materia = await this.findByUuid(uuid);
    if (materia) {
      materia.estatus = estatus;
    }
  }
}
