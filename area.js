const side1 = document.querySelector("#side1");
const side2 = document.querySelector("#side2");
const side3 = document.querySelector("#side3");
const areaButton = document.querySelector("#areaBtn");
const outputDiv = document.querySelector("#output");


function calculateArea() {
    const firstSideValue = Number(side1.value);
    const secondSideValue = Number(side2.value);
    const thirdSideValue = Number(side3.value);


    if (firstSideValue === 0 || firstSideValue < 0 ||
        secondSideValue === 0 || secondSideValue < 0 ||
        thirdSideValue === 0 || thirdSideValue < 0
    ) {
        outputDiv.innerText = "angle field cannot be less than zero or empty"
        outputDiv.style.color = "red"
    } else if (
        firstSideValue + secondSideValue > thirdSideValue &&
        secondSideValue + thirdSideValue > firstSideValue &&
        firstSideValue + thirdSideValue > secondSideValue
    ) {
        const semiPerimeter = (firstSideValue + secondSideValue + thirdSideValue) / 2

        const result = Math.sqrt(
            semiPerimeter * (semiPerimeter - firstSideValue) * (semiPerimeter - secondSideValue) * (semiPerimeter - thirdSideValue));

        outputDiv.innerText = `area of a triangle is using heron's formula is ${result} units`
        outputDiv.style.color = "black"
    } else {
        outputDiv.innerText = "enter the valid side length"
        outputDiv.style.color = "red"
    }

}



areaButton.addEventListener("click", calculateArea);