import { Tema } from '../../domain/entities/tema'; // Importar la clase Tema
import { TemaRepository } from '../../domain/ports/temaRepository';

export class CreateTema {
  constructor(private temaRepository: TemaRepository) {}

  async execute(uuid: string, nombre: string, estatus: 'activo' | 'inactivo', identificadorMateria: string): Promise<void> {
    const tema = new Tema(uuid, nombre, estatus, identificadorMateria);
    await this.temaRepository.save(tema);
  }
}

