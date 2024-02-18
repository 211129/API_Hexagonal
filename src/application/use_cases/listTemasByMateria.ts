import { TemaRepository } from '../../domain/ports/temaRepository';
import { Tema } from '../../domain/entities/tema'; // Asegúrate de que la ruta es correcta

export class ListTemasByMateria {
  constructor(private temaRepository: TemaRepository) {}

  async execute(materiaUuid: string): Promise<Tema[]> { // Cambiado de Promise<void> a Promise<Tema[]>
    return this.temaRepository.findByMateriaUuid(materiaUuid);
  }
}

