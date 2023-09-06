
//--------------------------Armar url API ----------------------//
let preguntas=""
export async function urlAPI (armarApi) {
//1.Verificar que los valores en any o NaN queden vacios.  
  for (let index = 0; index < armarApi.length; index++) {
    if (armarApi[index]==="any")
     {
      armarApi[index]=""  
    }
  }
// 2. Variables para armar la api
  let numero = parseInt(armarApi[0])
  let categoria =(armarApi[1])
  let dificultad = armarApi[2]
  let tipoRespuesta = armarApi[3]
 
  let triviaApi = `https://opentdb.com/api.php?amount=${numero}&category=${categoria}&difficulty=${dificultad}&type=${tipoRespuesta}`;
  preguntas = await fetch(triviaApi);
  let preguntasParseadas = await preguntas.json();
  let preguntasArray=preguntasParseadas.results
  return preguntasArray;}
  





















  
