import { Materia } from '../../domain/entities/materia'; // Importar la clase Materia
import { MateriaRepository } from '../../domain/ports/materiaRepository';

export class CreateMateria {
  constructor(private materiaRepository: MateriaRepository) {}

  async execute(uuid: string, nombre: string, carrera: string, estatus: 'activo' | 'inactivo'): Promise<void> {
    const materia = new Materia(uuid, nombre, carrera, estatus);
    await this.materiaRepository.save(materia);
  }
}

