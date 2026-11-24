import { Routes } from '@angular/router';
import { Materias } from './views/materias/materias';

export const routes: Routes = [
  // La ruta principal redirige a /materias
  { path: '', redirectTo: 'materias', pathMatch: 'full' },
  { path: 'materias', component: Materias }
];
