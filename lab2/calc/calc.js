
// let current = "";
// let previous ="";
// let operation = null;
// const display = document.getElementById("display");
// function appendNumber(number){
//     if(number === "." && current.includes(".")) return;
//     current = current.toString() + number.toString();
//    display.value = current ;
// }

// compute(){
//     let computation;
//     const prev = parseFloat(previous);
//     const curr = parseFloat(current);
//     if(isNaN(prev) || isNaN(curr)) return;

// }
// function chooseOperation(op){{
//     if(current === "") return;
//     if(previous !== ""){
//         compute();
//     }
// }


let current = "";
let previous = "";
let operation = null;
const display = document.getElementById("display");


function appendnum(number) {
  if (number === "." && current.includes(".")) return;
  current = current.toString() + number.toString();
  display.value = current;
}


function chooseoperation(op) {
  if (current === "") return;
  if (previous !== "") {
    compute();
  }
  operation = op;
  previous = current;
  current = "";
}


function compute() {
  let computation;
  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  

  switch (operation) {
    case "+":
      computation = prev + curr;
      break;
    case "-":
      computation = prev - curr;
      break;
    case "*":
      computation = prev * curr;
      break;
    case "/":
      computation = prev / curr;
      break;
    default:
      return;
  }

  let result = computation.toString();
  operation = null;
  previous = "";
    display.value = result;
}

