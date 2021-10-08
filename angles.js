let inputs = document.querySelectorAll('.angle-input')  ;
let istrianglebtn= document.querySelector('#triangle-btn') ;
let output = document.querySelector('#output') ;  

function calculatesumofAngles (angle1,angle2,angle3) {
    let sumofangles = angle1 + angle2 + angle3 ; 
    return sumofangles ;
}

function istriangle () {
    let sumofangles = calculatesumofAngles(Number(inputs[0].value), Number(inputs[1].value),Number(inputs[2].value)) ; 
    if (Number(inputs[0].value)<=0 || Number(inputs[1].value) <= 0 || Number(inputs[2].value) <= 0)  {
        output.innerText = "Sides can not be negative, zero, or empty" 
    }

   else if  (sumofangles === 180) { 
          output.innerText = "yes The angles Form of Triangle" ;
      } 
      else{
          output.innerText = "The Angles doesnt Form A Triangle" ;
      } 
      
} 

istrianglebtn.addEventListener('click',istriangle) 