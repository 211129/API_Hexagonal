import { Materia } from '../entities/materia';

export interface MateriaRepository {
  save(materia: Materia): Promise<void>;
  findAll(): Promise<Materia[]>;
  findByUuid(uuid: string): Promise<Materia | null>;
  updateStatus(uuid: string, estatus: 'activo' | 'inactivo'): Promise<void>;
}
