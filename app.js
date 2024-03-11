const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const del = document.querySelector(".del");
const pm = document.querySelector(".pm");
const eqals = document.querySelector(".eqals");
console.log(numbers);

let numA = "";
let numB = "";
let operator = "";
let isEquals = false;

//FUNKCJE

function addNumber() {
  if (isEquals) {
    numA = this.textContent;
    numB = "";
    operator = "";
    render();
    isEquals = false;
  } else {
    if (!operator) numA += this.textContent;
    else numB += this.textContent;
    console.log(numA, numB, operator);
    render();
  }
}
function setOperator() {
  if (operator) {
    equalsTo();
    operator = this.textContent;
  } else {
    operator = this.textContent;
  }
  console.log(numA, numB, operator);
  render();
}
function render() {
  if (numA && !numB && !operator) {
    document.querySelector("#result").innerHTML = numA;
    document.querySelector("#action").innerHTML = "";
  }
  if (numA && operator && !numB) {
    document.querySelector("#action").innerHTML = `${numA} ${operator}`;
    document.querySelector("#result").innerHTML = "";
  }
  if (numA && operator && numB) {
    document.querySelector("#action").innerHTML = `${numA} ${operator}`;
    document.querySelector("#result").innerHTML = numB;
  }
  if (!numA && !operator && !numB) {
    document.querySelector("#action").innerHTML = "";
    document.querySelector("#result").innerHTML = "";
  }
}
function equalsTo() {
  document.querySelector("#action").innerHTML = `${numA} ${operator} ${numB}`;
  let res = 0;
  //
  if (operator === "+") res = +numA + +numB;
  if (operator === "/") res = +numA / +numB;
  if (operator === "*") res = +numA * +numB;
  if (operator === "-") res = +numA - +numB;
  //
  document.querySelector("#result").innerHTML = res;
  numA = res;
  operator = "";
  numB = "";
  isEquals = true;
}

//addEventListener

numbers.forEach((x) => {
  x.addEventListener("click", addNumber);
});
operators.forEach((y) => {
  y.addEventListener("click", setOperator);
});
clear.addEventListener("click", () => {
  numA = "0";
  numB = "";
  operator = "";
  render();
});
del.addEventListener("click", () => {
  if (!operator) {
    numA = numA.substring(0, numA.length - 1);
    console.log(numA, numB, operator);
  } else {
    numB = numB.substring(0, numB.length - 1);
    console.log(numA, numB, operator);
  }
  render();
});
eqals.addEventListener("click", () => {
  equalsTo();
});
