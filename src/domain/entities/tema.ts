export class Tema {
    constructor(
      public uuid: string,
      public nombre: string,
      public estatus: 'activo' | 'inactivo',
      public identificadorMateria: string
    ) {}
  }
  
  