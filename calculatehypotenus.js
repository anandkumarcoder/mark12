const userInput = document.querySelectorAll(".sideInput");
const calculateBtn = document.querySelector("#calculateHypotenus");
const outputDiv = document.querySelector("#output")


function squareOfSides(a, b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares
}



function calculateHypotenus() {
   const sumOfSquares = squareOfSides(Number(userInput[0].value), Number(userInput[1].value));

   if(Number(userInput[0].value < 0) || Number(userInput[1].value < 0) ){
       outputDiv.innerText = "Angles cannot be in less than zero"
       outputDiv.style.color = "red"


   } else if(sumOfSquares === 0){
       outputDiv.innerText="plese enter the values"
       outputDiv.style.color = "red"
   } else { 
    lengthOfHypotenus = Math.sqrt(sumOfSquares);
    outputDiv.innerText = "lenght of hypotneus is " + lengthOfHypotenus + "units"

   }
   
//    lengthOfHypotenus = Math.sqrt(sumOfSquares);
//    outputDiv.innerText = "lenght of hypotneus is " + lengthOfHypotenus + "units"

}
// variable deinfed here equal to function defined in line 6

calculateBtn.addEventListener("click", calculateHypotenus);
