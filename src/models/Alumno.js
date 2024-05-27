export class Alumno {
  matricula;
  nombre;
  apellidoP;
  apellidoM;
  calC1;
  calC2;
  calC3;

  constructor(matricula, nombre, apellidoP, apellidoM) {
    this.matricula = matricula;
    this.nombre = nombre;
    this.apellidoP = apellidoP;
    this.apellidoM = apellidoM;
  }

  guardarCalificacion(calC1, calC2, calC3) {
    this.calC1 = calC1;
    this.calC2 = calC2;
    this.calC3 = calC3;
  }

  obtenerPromedio() {
    return (this.calC1 + this.calC2 + this.calC3) / 3;
  }
}
