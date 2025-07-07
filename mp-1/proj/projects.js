let numOne=document.getElementById("one");
let numTwo=document.getElementById("two");
let result=document.getElementById("output");

function doAdd(){
    console.log("I am working, addition");
    displayResult(Number(numOne.value)+Number(numTwo.value));
}

function doSub(){
    console.log("I am working, subtraction");
    displayResult(Number(numOne.value)-Number(numTwo.value));
}

function doMult(){
    console.log("I am working, multiplication");
    displayResult(Number(numOne.value)*Number(numTwo.value));
}

function doDiv(){
    console.log("I am working, division");
    displayResult(Number(numOne.value)/Number(numTwo.value));
}

function doPow(){
    console.log("I am working, power");
    let startNumber = 1;

    for(let i = 0; i < Number(two.value); i++){
        startNumber = Number(numOne.value) * startNumber;
    }
    displayResult(startNumber)
}

function doClear(){
    console.log("Cleared")
    console.log("Cleared");
    numOne.value = "";
    numTwo.value = "";
    result.innerHTML = "";
}

//Helper function to determine whether or not the result is negative 
function displayResult(value) {
    result.innerHTML = value;

    if (value < 0) {
        result.style.color = "red";
    } else {
        result.style.color = "black";
        result.style.backgroundColor = "transparent";
    }
}


