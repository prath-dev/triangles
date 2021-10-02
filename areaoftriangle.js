let inputs = document.querySelectorAll(".input");
let btncalculate = document.querySelector("#btn-calculate");
let output = document.querySelector("#output"); 
btncalculate.addEventListener('click',calculatearea) ; 

function calculation(base, height) {
    const inputscalculation = base * height; 
    return inputscalculation ; 
} 
function calculatearea () { 
    let inputscalculation = calculation(Number(inputs[0].value), Number(inputs[1].value));
    let areaofTriangle = 1/2  * inputscalculation;
    output.innerText = "The Area of Triangle is " + areaofTriangle.toFixed(2) + "cm²";
}