let sides  = document.querySelectorAll('.side-input') ; 
let buttoncalculate = document.querySelector('#btncalculate') ; 
let output = document.querySelector('#output') ;  


 function calculatesumofsquare (a,b)  {
     let sumofsquares = a*a + b*b ;
     return sumofsquares ;
 } 

 function calculateHypotenuse () {  

    if(Number(sides[0].value)<=0 || Number(sides[1].value) <= 0){
        output.innerText = "Sides can not be negative, zero, or empty";
    }
  
    else  {
     let sumofsquares = calculatesumofsquare(Number(sides[0].value),Number(sides[1].value)) ;  
     let lengthofhypotenuse = Math.sqrt(sumofsquares) ; 
 
  output.innerText =  "the length of hypotenuse"+ lengthofhypotenuse; 
 }   
 }
 buttoncalculate.addEventListener("click", calculateHypotenuse)  ;



