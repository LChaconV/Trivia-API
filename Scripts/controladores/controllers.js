import{datosParaApi} from "./Scripts/Inicio.js"
let armarApi = await datosParaApi()

let numero = armarApi[0]
let dificultad = armarApi[1]
let tipoRespuesta = armarApi[2]
let categoria = ""; //debe ser un numero
const triviaApi = `https://opentdb.com/api.php?amount=${numero}&category=${categoria}&difficulty=${dificultad}&type=${tipoRespuesta}`;

export async function obtenerPreguntas() {
 
    let preguntas = await fetch(triviaApi);
  let preguntasParseadas = await preguntas.json();
  //console.log(preguntasParseadas)
  let preguntasArray=preguntasParseadas.results
  //console.log("------------------------------------------------")
 // console.log("Preguntas ",preguntasArray)
  return preguntasArray;
}




