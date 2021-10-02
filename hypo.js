let sides  = document.querySelectorAll('.side-input') ; 
let buttoncalculate = document.querySelector('#btncalculate') ; 
let output = document.querySelector('#output') ;  


 function calculatesumofsquare (a,b)  {
     let sumofsquares = a*a + b*b ;
     return sumofsquares ;
 } 

 function calculateHypotenuse () {
     let sumofsquares = calculatesumofsquare(Number(sides[0].value),Number(sides[1].value)) ;  
     let lengthofhypotenuse = Math.sqrt(sumofsquares) ; 
 
  output.innerText =  "the length of hypotenuse"+ lengthofhypotenuse; 
 }  
 buttoncalculate.addEventListener("click", calculateHypotenuse)  ;



