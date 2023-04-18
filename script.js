const num1 = document.getElementsByClassName("numeros")
const oper = document.getElementsByClassName("simbolo")
const borrador = document.getElementById("Borra");
let aux = document.getElementById("result");
let res = 0;

function addNumber(num) {
    if (num1) {
        document.getElementById("result").value += num;
    } 
}

function addOperator(operador) {
    let value = aux.value;
    if (value.endsWith("+") || value.endsWith("-") || value.endsWith("*") || value.endsWith("/")) {
      return;
    }
    aux.value += operador;
  }

  function calculate() {
    res = eval(aux.value);
    aux.value = res;
}

borrador.addEventListener('click', function paraBorrar() {
  aux.value = "";
  botonBorrar.innerText = "C";
}) 
