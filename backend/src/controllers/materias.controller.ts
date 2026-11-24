import { Request, Response } from 'express';
import { consultarMaterias } from '../models/materias.model';

// CONTROLADOR: recibe la petición, llama al modelo y responde en JSON
export const obtenerMaterias = async (_req: Request, res: Response) => {
  try {
    const materias = await consultarMaterias();

    res.status(200).json(materias);

  } catch (error) {
    console.error('Error al consultar materias:', error);

    res.status(500).json({
      message: 'Error al consultar las materias'
    });
  }
};
