const faqQuestionAnswerMap = 
{
    1:"This is an answer"
}

function generateFaqAnswer(questionNumber)
{
    let boxId = "faqBox" + questionNumber.toString()
    let answerBoxId = "faqBoxAnswer" + questionNumber.toString()
    document.getElementById(answerBoxId).innerHTML = `<p>${faqQuestionAnswerMap[questionNumber]} <br><br><button class="normalButton" onclick="minimizeFaqAnswer(${questionNumber})">Hide Answer</button></p>`;

}

function minimizeFaqAnswer(questionNumber)
{
    let boxId = "faqBox" + questionNumber.toString()
    let answerBoxId = "faqBoxAnswer" + questionNumber.toString()
    document.getElementById(answerBoxId).innerHTML = ``;
}


// References to DOM Elements
var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");
var book = document.getElementById("book");

var paper1 = document.getElementById("p1");
var paper2 = document.getElementById("p2");
var paper3 = document.getElementById("p3");


// Business Logic
let currentLocation = 1;
let numOfPapers = 2;
let maxLocation = numOfPapers + 1;

function openBook() {
    document.getElementById("book").style.transform = "translateX(50%)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        document.getElementById("book").style.transform = "translateX(0%)";
    } else {
        document.getElementById("book").style.transform = "translateX(100%)";
    }
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                document.getElementById("p1").classList.add("flipped");
                document.getElementById("p1").style.zIndex = 1;
                break;
            case 2:
                document.getElementById("p2").classList.add("flipped");
                document.getElementById("p2").style.zIndex = 2;
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                document.getElementById("p1").classList.remove("flipped");
                document.getElementById("p2").classList.remove("flipped");
                document.getElementById("p2").style.zIndex = 1;
                document.getElementById("p1").style.zIndex = 2;
                break;
            case 3:
                openBook();
                document.getElementById("p2").classList.remove("flipped");
                document.getElementById("p2").style.zIndex = 1;
                break;

            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}

function renderMobileMenu()
{
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}