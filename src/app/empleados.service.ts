import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService:DataServices){

    }

    empleados:Empleado[]=[
        new Empleado("Soobin","Choi","Lider",2000),
        new Empleado("Yeonjun","Choi","Bailarin",1999),
        new Empleado("Beomgyu","Choi","Visual",2001),
        new Empleado("Taehyun","Kang","Serio",2002),
        new Empleado("Kai","Huening","Makne",2002),
      ];

      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" + empleado.nombre + "\n" + "Salario: " + empleado.salario);
        
        this.empleados.push(empleado);

        this.dataService.guardarEmpleados(this.empleados);
      }

      encontrarEmpleado(indice:number){
        let empleado:Empleado=this.empleados[indice];
        return empleado;
      }
      actualizarEmpleado(indice:number, empleado:Empleado){
        let empleadoModificado=this.empleados[indice];

        empleadoModificado.nombre=empleado.nombre;
        empleadoModificado.apellido=empleado.apellido;
        empleadoModificado.cargo=empleado.cargo;
        empleadoModificado.salario=empleado.salario;
        
      }
      eliminarEmpleado(indice:number){
        this.empleados.splice(indice,1);
      }
}