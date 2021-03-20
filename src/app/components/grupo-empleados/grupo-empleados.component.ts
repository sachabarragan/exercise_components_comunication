import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grupo-empleados',
  templateUrl: './grupo-empleados.component.html',
  styleUrls: ['./grupo-empleados.component.css']
})
export class GrupoEmpleadosComponent implements OnInit {
  
  @Input() todos: number = 0;
  @Input() masculinos: number = 0;
  @Input() femeninos: number = 0;
  @Input() indefinidos: number = 0;
  filtroRadio: string = 'Todos'
  @Output() radioCambiado: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarLista($event): void{
    this.radioCambiado.emit(this.filtroRadio);
  }

}
