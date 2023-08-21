let selectNum = document.getElementById("trivia_amount");
let selectCategoria = document.getElementById("form-control");
let selectDificultad = document.getElementById("selectDificultad");
let selectTipo = document.getElementById("selectTipo");
let btnInicio = document.getElementById("Btn-Inicio");

btnInicio.addEventListener("click", function (event) {
  console.log("hola");

  //window.location.href = " ../../index.html"
});
async function datosParaApi(){
    console.log("hola2");
  let dataApi = await [
    parseInt(selectNum.value),
    selectCategoria.value,
    selectDificultad.value,
    selectTipo.value,
  ];

 return dataApi
}
