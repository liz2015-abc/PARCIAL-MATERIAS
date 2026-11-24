import { Router } from 'express';
import { obtenerMaterias } from '../controllers/materias.controller';

const router = Router();

// GET /api/v1/materias
router.get('/', obtenerMaterias);

export default router;
