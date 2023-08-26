
//--------------------------Armar url API ----------------------//
export function urlAPI (armarApi) {
//1.Verificar que los valores en any o NaN queden vacios.  
  for (let index = 0; index < armarApi.length; index++) {
    if (armarApi[index]==="any"|| armarApi[index]==="NaN")//Revisar cuando categoria = NaN
     {
      armarApi[index]=""  
    }
  }
// 2. Variables para armar la api
  let numero = parseInt(armarApi[0])
  let categoria =parseInt(armarApi[1])
  let dificultad = armarApi[2]
  let tipoRespuesta = armarApi[3]
 
  let triviaApi = `https://opentdb.com/api.php?amount=${numero}&category=${categoria}&difficulty=${dificultad}&type=${tipoRespuesta}`;
  console.log(triviaApi)
  return obtenerPreguntas(triviaApi)
  }
// 3. Parsear información de la API
export async function obtenerPreguntas(triviaApi) {
  console.log("Ejecutando Obtener preguntas: ", triviaApi)
    let preguntas = await fetch(triviaApi);
  let preguntasParseadas = await preguntas.json();
  //console.log(preguntasParseadas)
  let preguntasArray=preguntasParseadas.results
  //console.log("------------------------------------------------")
  console.log("Preguntas ",preguntasArray)
  return preguntasArray;
}
//--------------------------------------------------------------------------------------//



