import { pool } from '../db';

// MODELO: es el único que habla con PostgreSQL
export const consultarMaterias = async () => {
  const resultado = await pool.query(
    'SELECT id, nombre, nrc FROM materias ORDER BY id;'
  );

  // Devuelve las filas encontradas
  return resultado.rows;
};
