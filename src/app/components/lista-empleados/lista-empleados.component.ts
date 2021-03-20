import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Empleado } from '../../models/empleado.model';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  @Output() empleados: EventEmitter<Empleado[]> = new EventEmitter();
  arrEmpleados: Empleado[]
  todos: number = 0;
  masculinos: number = 0;
  femeninos: number = 0;
  indefinidos: number = 0;
  filtroRadio: string = 'Todos'

  constructor() {
    this.arrEmpleados = [
      new Empleado(1, 'Sacha', 'Barragan', 'Front End Developer', 'Masculino'),
      new Empleado(2, 'Juan', 'Gonzalez', 'Back End Developer', 'Masculino'),
      new Empleado(3, 'Ariel', 'Ozorio', 'Front End Developer', 'Indefinido'),
      new Empleado(4, 'Nahuel', 'Monsalve', 'UI Developer', 'Masculino'),
      new Empleado(5, 'Maria', 'Bastons', 'Legacy Group', 'Femenino'),
      new Empleado(6, 'Juana', 'De Arco', 'Trainee Developer', 'Femenino'),
      new Empleado(7, 'Enriqueta', 'Morales', 'Marketing', 'Indefinido'),
      new Empleado(8, 'Estefania', 'Salas', 'UX Developer', 'Femenino'),
    ]
   }

  ngOnInit(): void {
    this.getAll();
  }
  
  ngAfterViewInit() {
    this.empleados.emit(this.arrEmpleados);
  }

  getAll(): void {
    for(let i=0; i < this.arrEmpleados.length; i++){
      if(this.arrEmpleados[i].sexo === 'Masculino'){
        this.masculinos++;
      } else if(this.arrEmpleados[i].sexo === 'Femenino'){
        this.femeninos++;
      } else {
        this.indefinidos++;
      }
      this.todos++;
    }
  }

  cambioElRadio($event): void {
    this.filtroRadio = $event;
  }

}
