import express from 'express';
import cors from 'cors';
import materiasRoutes from './routes/materias.routes';

const app = express();

// Orígenes que pueden hacer peticiones a este backend:
// Angular local (localhost:4200) y la URL pública del frontend (variable FRONTEND_URL en Railway)
const origenesPermitidos = ['http://localhost:4200'];
if (process.env.FRONTEND_URL) {
  origenesPermitidos.push(process.env.FRONTEND_URL);
}

app.use(cors({ origin: origenesPermitidos }));
app.use(express.json());

// Rutas
app.use('/api/v1/materias', materiasRoutes);

export default app;
