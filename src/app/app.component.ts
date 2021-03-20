import { Component } from '@angular/core';
import { Empleado } from './models/empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'empleados';
  empleados: Empleado[];

  mostrarEmpleados($event): void {
    this.empleados = $event;
    console.log(this.empleados);
  }
}
