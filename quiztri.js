const quizForm = document.querySelector(".quizForm")

const submitBtn = document.querySelector("#submitBtn");
const outputDiv = document.querySelector("#output");

const correctAnswer = ["90°" , 
"right angled" , 
"one right angle",
"12, 16, 20",
"Equilateral triangle",
"100°",
"30°",
"a + b + c",
"no",
"45°",];



function calculateScore(e){
    e.preventDefault();
    let score = 0;
    let index= 0;
    const formResult = new FormData(quizForm);
    for ( let value of formResult.values()){
        if (value === correctAnswer[index]){ score = score + 1;
        }
        index = index + 1;
    }
    outputDiv.innerText = "your score is " + score ;
  
}

submitBtn.addEventListener('click', calculateScore )