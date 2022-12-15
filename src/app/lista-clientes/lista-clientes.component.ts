import { Component, Input } from '@angular/core';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent {

  @Input() cliente: any;

  constructor(){

  }

}
