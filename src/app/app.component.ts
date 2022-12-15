import { Component } from '@angular/core';
import { Cliente } from './cliente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'T35_Ejercicio1';

  nombre: string | undefined;

  CIF: string | number | undefined;

  direccion: string | undefined;

  grupo: number | undefined;

  clientes: Array<Cliente> = [];

  constructor(){
  }

  guardar(){
    const cliente: Cliente={
      nombre: this.nombre,
      CIF: this.CIF,
      direccion: this.direccion,
      grupo: this.grupo
    }
    this.clientes.push(cliente);
  }
}
