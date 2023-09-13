//----------------------importar funciones ------------------//
//import { urlAPI,obtenerPreguntas } from "./controllers/controllers.js";
import { urlAPI } from "./controllers/controllers.js";
//---------------------- variables html --------------------//
let selectNum = document.getElementById("trivia_amount");
let selectCategoria = document.getElementById("form-control");
let selectDificultad = document.getElementById("selectDificultad");
let selectTipo = document.getElementById("selectTipo");
let btnInicio = document.getElementById("Btn-Inicio");
let btnr0 = document.getElementById("btn-r0")
let btnr1 = document.getElementById("btn-r1")
let btnr2 = document.getElementById("btn-r2")
let btnr3 = document.getElementById("btn-r3")
let Pantalla = document.getElementById("main");
let siguiente = document.getElementById("siguiente");
let cartas = document.getElementById("cards");
let header=document.getElementById("header")
//-----------------------variables locales-------------------//
let API = "";
let informacion = "";
let varNext = true;
//-----------------------funciones-------------------------//
// capturar la informacion de los select del header del html a traves del boton btnInicio
async function datosParaApi() {
  let dataApi = [
    parseInt(selectNum.value),
    selectCategoria.value,
    selectDificultad.value,
    selectTipo.value,
  ];
  return dataApi;
}

// crear las cartas que contienen las preguntas y las respuestas

async function cartaPreguntas(informacion) {
  cartas.innerHTML = "";
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
                  class="nomRespuestas btn btn-outline-light " 
                  value="${opcionesSort[i]}">${opcionesSort[i]}</button>
        </div>
        `;
      
      
    }
   
  }}



/*
let i = 0;
// PRUEBA DE CHAT GPT
async function cartaPreguntas(informacion) {
  //cartas.innerHTML = "";
  

  while (i < informacion.length) {
    console.log("bucle for antes del if", i);

    if (varNext === true) {
      
      varNext = false;
      let opciones = [];
      let opcionesSort = "";

      if (informacion[i].type === "multiple") {
        opciones.push(informacion[i].correct_answer);
        for (let a = 0; a < informacion[i].incorrect_answers.length; a++) {
          opciones.push(informacion[i].incorrect_answers[a]);
        }
      } else {
        opciones.push("False", "True");
      }

      opcionesSort = opciones.sort(function () {
        return Math.random();
      });

      cartas.innerHTML += `
        <div class="barSuper">
          <p class="nomCategoria">${informacion[i].category}</p>
          <p class="nomdificultad">Dificultad: ${informacion[i].difficulty}</p>
        </div>
        <p class="pregunta">${informacion[i].question}</p>`;

        
      for (let j = 0; j < opcionesSort.length; j++) {
        cartas.innerHTML += `   
          <div class="botones">
            <button id="btn-r${j}" class="nomRespuestas btn btn-outline-light" value="${opcionesSort[j]}">${opcionesSort[j]}</button>
          </div>`;
      }
   

   


      // Esperar hasta que se haga clic en el botón "siguiente"
      await new Promise((resolve) => {
        siguiente.addEventListener("click", () => {
          varNext = true;
          cartas.innerHTML = "";
          resolve();
        });
      });
      if (i===informacion.length-1){
        main.innerHTML =`<h1>PREGUNTAS FINALIZADAS</h1>`
      i=i+2;
        console.log("valor length del vector=",informacion.length)
        console.log("valor i= ",i)
      }
console.log("valor i, dentro del primer if",i)
    }

      i++;
      
  }
}
*/
btnInicio.addEventListener("click", async function (event) {
  API = await datosParaApi();
  informacion = await urlAPI(API);
  Pantalla.style.display = "flex";
  cartaPreguntas(informacion);
  selectCategoria.value = "any";
  selectDificultad.value = "any";
  selectTipo.value = "any";
});



