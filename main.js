import { obtenerPreguntas } from "./Scripts/controladores/controllers.js";


let header = document.getElementById("header");
let pregunta = document.getElementById("pregunta");
let respuestas = document.getElementById("respuestas");
let informacion = await obtenerPreguntas();

let a = 0;
let numero = 1; // depende del numero que elija el usuario




//----------------------------------------------FUNCIONES-----------------------------------------//
function revisarInfo(num){
  var boton = document.getElementById("btn-r",num)
  var info = boton.innerHTML;
    console.log(info)
    return(info)
};



//console.log("--------------------------------------------------")
//console.log(informacion)

//--------------- Diseño de pantalla por cada pregunta -----------------------------//
// 1- Crear un ciclo for para que se muestre en pantalla una a una las preguntas
for (let i = 0; i < informacion.length; i++) {

  let opciones = [];
  let opcionesSort = "";
  // 2- Verificar si el tipo de prefunta es multipe o falso y verdadero//
  // Si es tipo falso se crear un vector con las posibles respuestas
  if ((informacion[i].type = "multiple")) {
    opciones.push(informacion[i].correct_answer);
    for (let a = 0; a < informacion[i].incorrect_answers.length; a++) {
      opciones.push(informacion[i].incorrect_answers[a]);
    }
  }
  // si es de tipo verdadero/ falso se crea un vector con 2 opciones
  else {
    opciones.push("False", "True");
  }
  // Organizar en orden aleatorio las respuesta
  opcionesSort = opciones.sort(function () {
    return Math.random();
  });
  console.log("------");
  //console.log("las opciones antes del sort son : ", opciones);
  //console.log("las opciones despues del sort son : ", opcionesSort);

  // 3-mostrar en pantalla pregunta y opciones de respuesta
  header.innerHTML = `
    <div class="nomCategoria" >${informacion[i].category}</div>
    <div class="nomdificultad" >Dificultad: ${informacion[i].difficulty}</div> `;
  pregunta.innerHTML +=  `${informacion[i].question}`;

  for (let i = 0; i < opcionesSort.length; i++) {
     respuestas.innerHTML +=
       `<button id="btn-r${i}" class="nomRespuestas btn btn-outline-light" onclick="revisarInfo(${i})" >${opcionesSort[i]}</button>
     `;
  }
 
  opciones = [];
}

