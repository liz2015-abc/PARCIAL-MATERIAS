import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tabla-generica',
  imports: [MatTableModule],
  templateUrl: './tabla-generica.html',
  styleUrl: './tabla-generica.css'
})
export class TablaGenerica {

  // Textos del encabezado de la tabla. Ej: ['ID', 'Materia', 'NRC']
  @Input() titulos: string[] = [];

  // Nombres de las propiedades de cada registro. Ej: ['id', 'nombre', 'nrc']
  @Input() columnas: string[] = [];

  // Lista de registros que se muestran como filas
  @Input() datos: any[] = [];
}
