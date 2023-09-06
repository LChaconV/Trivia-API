//----------------------importar funciones ------------------//
//import { urlAPI,obtenerPreguntas } from "./controllers/controllers.js";
import { urlAPI } from "./controllers/controllers.js";
//---------------------- variables html --------------------//
let selectNum = document.getElementById("trivia_amount");
let selectCategoria = document.getElementById("form-control");
let selectDificultad = document.getElementById("selectDificultad");
let selectTipo = document.getElementById("selectTipo");
let btnInicio = document.getElementById("Btn-Inicio");

let cartas = document.getElementById("cards");
//-----------------------variables locales-------------------//
let API = "";
let informacion = "";
//-----------------------funciones-------------------------//
// capturar la informacion de los select del header del html a traves del boton btnInicio
//export async function datosParaApi() {
async function datosParaApi() {
  let dataApi = [
    parseInt(selectNum.value),
    selectCategoria.value,
    selectDificultad.value,
    selectTipo.value,
  ];
  //API = urlAPI(dataApi);
  console.log("la data API en la funcion datos para API", dataApi);
  return dataApi;
}

// crear las cartas que contienen las preguntas y las respuestas
async function cartaPreguntas(informacion) {
  cartas.innerHTML = "";
  //revisado y aprovado--------------
  console.log("la informacion en funcion cartaspreguntas", informacion);
  for (let i = 0; i < informacion.length; i++) {
    let opciones = [];
    let opcionesSort = "";
    //console.log("la informacion en funcion cartaspreguntas", informacion[i]);
    // 2- Verificar si el tipo de prefunta es multipe o falso y verdadero//
    // Si es tipo falso se crear un vector con las posibles respuestas
    if ((informacion[i].type = "multiple")) {
      opciones.push(informacion[i].correct_answer);
      console.log("la informacion de opciones", opciones);
      for (let a = 0; a < informacion[i].incorrect_answers.length; a++) {
        opciones.push(informacion[i].incorrect_answers[a]);
      }
    }
    // -----------------------------------------------------

    // si es de tipo verdadero/ falso se crea un vector con 2 opciones
    else {
      opciones.push("False", "True");
    }
    // Organizar en orden aleatorio las respuesta
    opcionesSort = opciones.sort(function () {
      return Math.random();
    });

    // 3-mostrar en pantalla pregunta y opciones de respuesta

    cartas.innerHTML += `
        <div class="barSuper">
        <p class="nomCategoria" >${informacion[i].category}</p>
        <p class="nomdificultad" >Dificultad: ${informacion[i].difficulty}</p> 
        </div>
          <p class="pregunta">${informacion[i].question}</p>`;
    for (let i = 0; i < opcionesSort.length; i++) {
      cartas.innerHTML += `   
                  <div class= "botones">
                  <button id="btn-r${i}" 
                  class="nomRespuestas btn btn-outline-light" 
                  value="${opcionesSort[i]}">${opcionesSort[i]}</button>
        </div>
        `;
    }
  }
}

btnInicio.addEventListener("click", async function (event) {
  API = await datosParaApi();
  informacion = await urlAPI(API);
  console.log("la informacion", informacion);

  cartaPreguntas(informacion);
});
