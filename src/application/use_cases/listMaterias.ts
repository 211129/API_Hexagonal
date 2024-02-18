import { Materia } from '../../domain/entities/materia'; 
import { MateriaRepository } from '../../domain/ports/materiaRepository';

export class ListMaterias {
  constructor(private materiaRepository: MateriaRepository) {}

  async execute(): Promise<Materia[]> {
    return this.materiaRepository.findAll();
  }
}

