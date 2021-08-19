const userInput = document.querySelectorAll(".sideInput");
const calculateBtn = document.querySelector("#calculateHypotenus");
const outputDiv = document.querySelector("#output")


function squareOfSides(a, b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares
}



function calculateHypotenus() {
   const sumOfSquares = squareOfSides(Number(userInput[0].value), Number(userInput[1].value));
   
   lengthOfHypotenus = Math.sqrt(sumOfSquares);
   outputDiv.innerText = "lenght of hypotneus is " + lengthOfHypotenus + "cm"

}
// variable deinfed here equal to function defined in line 6

calculateBtn.addEventListener("click", calculateHypotenus)
