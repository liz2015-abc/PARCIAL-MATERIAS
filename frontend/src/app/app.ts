import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Componente principal: solo muestra la vista que indique la ruta
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  // Angular 22 usa OnPush por defecto; Eager permite que Angular revise las vistas hijas (como Materias)
  changeDetection: ChangeDetectionStrategy.Eager
})
export class App {}
