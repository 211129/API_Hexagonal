// src/index.ts
import express from 'express';
import { materiaController } from './infrastructure/api/materiaController';
import { InMemoryMateriaRepository } from './infrastructure/repository/inMemoryMateriaRepository';

const app = express();
app.use(express.json());

const materiaRepository = new InMemoryMateriaRepository();

app.use('/materias', materiaController(materiaRepository)); // asegúrate de que esto coincida con la exportación

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
