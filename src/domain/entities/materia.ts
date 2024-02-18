export class Materia {
    constructor(
      public uuid: string,
      public nombre: string,
      public carrera: string,
      public estatus: 'activo' | 'inactivo'
    ) {}
  }
  