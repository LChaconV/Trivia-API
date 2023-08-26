//----------------------importar funciones ------------------//
import { urlAPI,obtenerPreguntas } from "./controllers/controllers.js";
//---------------------- variables html --------------------//
let selectNum = document.getElementById("trivia_amount");
let selectCategoria = document.getElementById("form-control");
let selectDificultad = document.getElementById("selectDificultad");
let selectTipo = document.getElementById("selectTipo");
let btnInicio = document.getElementById("Btn-Inicio");
let bntCrear=document.getElementById("btn-crear")
let barSuper = document.getElementById("barSuper");
let pregunta = document.getElementById("pregunta");
let respuestas = document.getElementById("respuestas");
let cartas = document.getElementById("cards");
//-----------------------variables locales-------------------//
let API = "";
let informacion =""
//-----------------------funciones-------------------------//
// capturar la informacion de los select del header del html a traves del boton btnInicio
export async function datosParaApi() {
  let dataApi = [
    parseInt(selectNum.value),
    selectCategoria.value,
    selectDificultad.value,
    selectTipo.value,
  ];
  urlAPI(dataApi);
  
}

 btnInicio.addEventListener("click", async function (event) {
  informacion= await datosParaApi();
 
  
});



/* array de prueba -------------------------------*/
informacion= [
    {
      category: "Entertainment: Film",
      type: "multiple",
      difficulty: "medium",
      question: "In the &quot;Jurassic Park&quot; universe, what is the name of the island that contains InGen&#039;s Site B?",
      correct_answer: "Isla Sorna",
      incorrect_answers: [
        "Isla Nublar",
        "Isla Pena",
        "Isla Muerta"
      ]
    }
  ]

  
// crear las cartas que contienen las preguntas y las respuestas
async function cartaPreguntas() {
  for (let i = 0; i <  informacion.length + 1; i++) {
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
    cartas.innerHTML += `
    <p class="nomCategoria" >${informacion[i].category}</p>
    <p class="nomdificultad" >Dificultad: ${informacion[i].difficulty}</p> 
    <p class="pregunta">${informacion[i].question}</p>
   `
    for (let i = 0; i < opcionesSort.length; i++) {
        cartas.innerHTML +=`   <div class= "botones">
        <button id="btn-r${i}" class="nomRespuestas btn btn-outline-light" onclick="revisarInfo(${i})" value="${opcionesSort[i]}">${opcionesSort[i]}</button>
    
    </div>`;
  }
}}
btnInicio.addEventListener("click", async function (event) {
await cartaPreguntas();
  });
  cartaPreguntas()
