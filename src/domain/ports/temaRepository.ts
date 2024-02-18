import { Tema } from '../entities/tema';

export interface TemaRepository {
  save(tema: Tema): Promise<void>;
  findAll(): Promise<Tema[]>;
  findByUuid(uuid: string): Promise<Tema | null>;
  findByMateriaUuid(materiaUuid: string): Promise<Tema[]>;
  updateStatus(uuid: string, estatus: 'activo' | 'inactivo'): Promise<void>;
}
