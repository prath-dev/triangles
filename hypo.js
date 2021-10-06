let sides  = document.querySelectorAll('.side-input') ; 
let buttoncalculate = document.querySelector('#btncalculate') ; 
let output = document.querySelector('#output') ;  


 function calculatesumofsquare (a,b)  {
     let sumofsquares = a*a + b*b ;
     return sumofsquares ;
 } 

 function calculateHypotenuse () {  
    if(sides[0].value =="" || sides[1].value=="" || sides[2].value=="" || sides[0].value<0 || sides[1].value<0|| sides[2].value<0){
        output.innerText = "Sides should not be empty and not  negative and 0 ";
    }
    else {
     let sumofsquares = calculatesumofsquare(Number(sides[0].value),Number(sides[1].value)) ;  
     let lengthofhypotenuse = Math.sqrt(sumofsquares) ; 
 
  output.innerText =  "the length of hypotenuse"+ lengthofhypotenuse; 
 }   
}
 buttoncalculate.addEventListener("click", calculateHypotenuse)  ;



