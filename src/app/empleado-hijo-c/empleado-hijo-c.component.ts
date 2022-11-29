import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {

  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;

  empleados:Empleado[]=[

    new Empleado("Soobin","Choi","Lider",2000),
    new Empleado("Yeonjun","Choi","Bailarin",1999),
    new Empleado("Beomgyu","Choi","Visual",2001),
    new Empleado("Taehyun","Kang","Serio",2002),
    new Empleado("Kai","Huening","Makne",2002),
  ];
  empleadoAgregado(empleado:Empleado){

    this.empleados.push(empleado);

  }
  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string){
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

}
