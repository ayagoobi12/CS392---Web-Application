function myPow():void {
    let first = document.getElementById("first").value; 
    //Note that in this case first is represented by a string, so we must convert it to a number using the Number() function 
    first = Number(first);
    let second = document.getElementById("second").value; 
    second = Number(second);
    let startNumber = 1; 
    for(let i = 0; i < second; i++){
        startNumber *= first * startNumber;
    }
    document.getElementById.("output").innerHTML=`<h3>${outputNumber}</h3>`;
}


function myPow(): void {
    let first = document.getElementById("first").value; 
    //convert to number 
    first = Number(first);
    let second = document.getElementById("second").value; 
    second = Number(second);

    let endValue = 1; 
    for(let i = 0; i < second; i++){
        endValue *= first; //This is how we increase everytime exponentially is we multiply by the value over and over again 
    }
    document.getElementById("output").innerHTML`<h3>${endValue}</h3`;
}


