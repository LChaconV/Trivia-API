
let armarApi =[1,"any","any",2] // info temporal// se debe traer la informacion de inicio.js y reemplazarla

let numero = armarApi[0]
let dificultad = armarApi[1]
let tipoRespuesta = armarApi[2]
let categoria = ""; //debe ser un numero
// Original ------ const triviaApi = `https://opentdb.com/api.php?amount=${numero}&category=${categoria}&difficulty=${dificultad}&type=${tipoRespuesta}`;
const triviaApi = `https://opentdb.com/api.php?amount=1`
export async function obtenerPreguntas() {
 
    let preguntas = await fetch(triviaApi);
  let preguntasParseadas = await preguntas.json();
  //console.log(preguntasParseadas)
  let preguntasArray=preguntasParseadas.results
  //console.log("------------------------------------------------")
 // console.log("Preguntas ",preguntasArray)
  return preguntasArray;
}




