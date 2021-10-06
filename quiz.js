let quizform = document.querySelector('#quiz-Form');
let btnsubmit =document.querySelector('#btn') ;
let output = document.querySelector('#output') ;  

let correctanswers =["acute","Scalene","2 congruent sides","360 degrees","2a"]; 

function calculatescore () {
    let score = 0 ;
    let index = 0 ;
    let formresults = new FormData(quizform) ; 
    for(let value of formresults.values()) { 

    if (value === correctanswers[index] ) {
        score = score + 1 ;
    } 
    index = index + 1  ;
} 
 output.innerText ="your score is " + score  ;
}  


btnsubmit.addEventListener('click',calculatescore) ; 