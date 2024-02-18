import express, { Request, Response } from 'express';
import { CreateMateria } from '../../application/use_cases/createMateria';
import { ListMaterias } from '../../application/use_cases/listMaterias';
import { MateriaRepository } from '../../domain/ports/materiaRepository';

export function materiaController(materiaRepository: MateriaRepository) {
  const router = express.Router();
  const createMateriaUseCase = new CreateMateria(materiaRepository);
  const listMateriasUseCase = new ListMaterias(materiaRepository);

  router.post('/', async (req: Request, res: Response) => {
    const { uuid, nombre, carrera, estatus } = req.body;
    try {
      await createMateriaUseCase.execute(uuid, nombre, carrera, estatus);
      res.status(201).send({ message: 'Materia created successfully' });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  router.get('/', async (req: Request, res: Response) => {
    try {
      const materias = await listMateriasUseCase.execute();
      res.status(200).send(materias);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  return router;
}
