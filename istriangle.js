const input = document.querySelectorAll(".angleInput")
const triangleBtn = document.querySelector("#isTriangleBtn")

const outputDiv = document.querySelector("#output")



function calculateSumOfAngle(angle1, angle2, angle3) {
    const sumOfAngle = angle1 + angle2 + angle3;
    return (sumOfAngle)
}




function isTriangle() {

    const sumOfAngle = calculateSumOfAngle(Number(input[0].value), Number(input[1].value), Number(input[2].value));


    if (sumOfAngle === 0 || sumOfAngle < 0) {
        outputDiv.innerText = "please put in valid angles"
        outputDiv.style.color = "red"
    } else if (sumOfAngle === 180) {
            outputDiv.innerText = "yes this is a triangle";
        } else {
            outputDiv.innerText = "no this is not a triangle";
        }

    

 


}


triangleBtn.addEventListener("click", isTriangle)