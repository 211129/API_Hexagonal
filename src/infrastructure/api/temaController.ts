// src/infrastructure/api/temaController.ts
import express, { Request, Response } from 'express';
import { CreateTema } from '../../application/use_cases/createTema';
import { ListTemasByMateria } from '../../application/use_cases/listTemasByMateria';
import { TemaRepository } from '../../domain/ports/temaRepository';

export function temaController(temaRepository: TemaRepository) {
  const router = express.Router();
  const createTemaUseCase = new CreateTema(temaRepository);
  const listTemasByMateriaUseCase = new ListTemasByMateria(temaRepository);

  router.post('/', async (req: Request, res: Response) => {
    const { uuid, nombre, estatus, identificadorMateria } = req.body;
    try {
      await createTemaUseCase.execute(uuid, nombre, estatus, identificadorMateria);
      res.status(201).send({ message: 'Tema created successfully' });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  router.get('/materia/:materiaUuid', async (req: Request, res: Response) => {
    const { materiaUuid } = req.params;
    try {
      const temas = await listTemasByMateriaUseCase.execute(materiaUuid);
      res.status(200).send(temas);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  return router;
}


