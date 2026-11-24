import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TablaGenerica } from '../../components/tabla-generica/tabla-generica';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-materias',
  imports: [TablaGenerica],
  templateUrl: './materias.html',
  styleUrl: './materias.css',
  // Angular 22 usa OnPush por defecto; Eager hace que la vista se actualice al llegar los datos del backend
  changeDetection: ChangeDetectionStrategy.Eager
})
export class Materias {
  // Textos que se ven en el encabezado de la tabla
  titulos = ['ID', 'Materia', 'NRC'];

  // Nombres de las columnas que llegan desde el backend
  columnas = ['id', 'nombre', 'nrc'];

  // Aquí se guardan las materias que llegan desde PostgreSQL
  materias: any[] = [];

  // Mensaje que se muestra si no se pueden cargar las materias
  mensajeError = '';

  // El constructor recibe HttpClient y consulta las materias al crear el componente
  constructor(private http: HttpClient) {
    this.consultarMaterias();
  }

  consultarMaterias() {
    this.http.get<any[]>(`${environment.apiUrl}/api/v1/materias`).subscribe({
      next: (datos) => {
        this.materias = datos;
      },
      error: (error) => {
        console.error('Error al consultar las materias:', error);
        this.mensajeError = 'No se pudieron cargar las materias. Revisa que el backend esté encendido.';
      }
    });
  }
}
