import { Component, OnInit } from '@angular/core';

/* Clases correspondientes a los campos de nombre, apellido y si es excelente o no*/
class Alumno{
  nombre: String;
  apellido: String;
  excelencia: Boolean;

  /* */
  constructor(){
    this.nombre= this.nombre;
    this.apellido= this.apellido;
    this.excelencia= this.excelencia;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'MySecondApp';
/* Nuevo objeto alumno, y un array ListadoAlumnos*/
  alumno: Alumno= new Alumno();
  ListadoAlumnos: Array<Alumno> = new Array<Alumno>();

  constructor(){
  }
  ngOnInit(){
  }
/* Método para agregar al objeto ListadoAlumnos, todos los parametros de la clase Alumno*/
  agregar(){
    this.ListadoAlumnos.push({
      nombre: this.alumno.nombre,
      apellido: this.alumno.apellido,
      excelencia: this.alumno.excelencia
    })
    /* Cuando se agreguen los datos, las cajas de texto se quedaran vacias*/
    this.alumno.nombre='';
    this.alumno.apellido='';
    this.alumno.excelencia= false;
/* Mostramos por consola el contenido del objeto ListadoAlumnos, No es importante para el código, es solo para ver los registros en la consola*/
    console.log(this.ListadoAlumnos)
    
  }
}
