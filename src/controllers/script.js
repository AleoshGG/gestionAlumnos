import { Alumno } from "../models/Alumno.js";
import { bts } from "./dependencies.js";

let contadorInscritos = 0;
let contadorAprobados = 0;
let contadorReprobados = 0;
let alumnoS = null;

let inscritos = document.getElementById("inscritos");
inscritos.innerText = contadorInscritos;
let aprobados = document.getElementById("aprobados");
aprobados.innerText = contadorInscritos;
let reprobados = document.getElementById("reprobados");
reprobados.innerText = contadorInscritos;

let btnInscribir = document.getElementById("inscribir");
let btnBuscar = document.getElementById("buscar");
let btnGuardar = document.getElementById("guardarCal");
let btnMaxMin = document.getElementById("listaRapida");

btnInscribir.addEventListener("click", () => {
  let matricula = parseInt(document.getElementById("matricula").value);
  let nombre = document.getElementById("nombre").value;
  let apellidoP = document.getElementById("apellidoP").value;
  let apellidoM = document.getElementById("apellidoM").value;

  const alumno = new Alumno(matricula, nombre, apellidoP, apellidoM);

  if (bts.add(alumno)) {
    alert("Alumno inscrito");
    contadorInscritos++;
    inscritos.innerText = contadorInscritos;
  } else {
    alert("Ocurrio un error inesperado");
  }

  document.getElementById("matricula").value = " ";
  document.getElementById("nombre").value = " ";
  document.getElementById("apellidoP").value = " ";
  document.getElementById("apellidoM").value = " ";
});

btnBuscar.addEventListener("click", () => {
  let matricula = parseInt(document.getElementById("matric-b").value);
  alumnoS = bts.search(matricula);

  if (alumnoS != null) {
    alert(`Ahora puede guardar las califacaciones de ${alumnoS.value.nombre}`);
  } else {
    alert("No se encontró registros");
  }
});

btnGuardar.addEventListener("click", () => {
  let calC1 = parseFloat(document.getElementById("corte1").value);
  let calC2 = parseFloat(document.getElementById("corte2").value);
  let calC3 = parseFloat(document.getElementById("corte3").value);

  alumnoS.value.calC1 = calC1;
  alumnoS.value.calC2 = calC2;
  alumnoS.value.calC3 = calC3;

  if (alumnoS.value.obtenerPromedio() >= 70) {
    contadorAprobados++;
    aprobados.innerText = contadorAprobados;
  } else {
    contadorReprobados++;
    reprobados.innerText = contadorReprobados;
  }

  alert("Éxito al guardar las calificaciones");

  document.getElementById("matric-b").value = " ";
  document.getElementById("corte1").value = " ";
  document.getElementById("corte2").value = " ";
  document.getElementById("corte3").value = " ";
});

btnMaxMin.addEventListener("click", () => {
  let primeroLista = bts.min();
  let ultimoLista = bts.max();

  if (primeroLista != null) {
    document.getElementById("matricula-td1").innerText =
      primeroLista.value.matricula;
    document.getElementById("apellidoP-td1").innerText =
      primeroLista.value.apellidoP;
    document.getElementById("apellidoM-td1").innerText =
      primeroLista.value.apellidoM;
    document.getElementById("nombre-td1").innerText = primeroLista.value.nombre;

    if (primeroLista.value.calC1 != null) {
      document.getElementById("corte1-td1").innerText =
        primeroLista.value.calC1;
      document.getElementById("corte2-td1").innerText =
        primeroLista.value.calC2;
      document.getElementById("corte3-td1").innerText =
        primeroLista.value.calC3;
      document.getElementById("final-td1").innerText =
        primeroLista.value.obtenerPromedio();
    }

    if (ultimoLista != null) {
      document.getElementById("matricula-td2").innerText =
        ultimoLista.value.matricula;
      document.getElementById("apellidoP-td2").innerText =
        ultimoLista.value.apellidoP;
      document.getElementById("apellidoM-td2").innerText =
        ultimoLista.value.apellidoM;
      document.getElementById("nombre-td2").innerText =
        ultimoLista.value.nombre;

      if (ultimoLista.value.calC1 != null) {
        document.getElementById("corte1-td2").innerText =
          ultimoLista.value.calC1;
        document.getElementById("corte2-td2").innerText =
          ultimoLista.value.calC2;
        document.getElementById("corte3-td2").innerText =
          ultimoLista.value.calC3;
        document.getElementById("final-td2").innerText =
          ultimoLista.value.obtenerPromedio();
      }
    }
  } else {
    alert("No hay alumnos inscritos");
  }
});