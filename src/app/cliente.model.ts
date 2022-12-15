export class Cliente {
  nombre: string | undefined="";

  CIF: string | number | undefined="";

  direccion: string | undefined="";

  grupo: number | undefined=1;

  constructor (nombre: string, CIF: string, direccion: string, grupo: number) {
    this.nombre = nombre,
    this.CIF = CIF,
    this.direccion = direccion,
    this.grupo = grupo;
  }
}
