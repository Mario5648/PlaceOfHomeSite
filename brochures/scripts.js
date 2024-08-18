const faqQuestionAnswerMap = 
{
    1:"To place an order, please contact us by using our contact form on this page, so we can send you the payment link and we can start discussing what your prints should feature!",
    2:"We accept Apple Pay, Visa, Mastercard, and American Express",
    3:"You can cancel at any time. Once you cancel, your subscription will finish the remaining period and you will no longer be charged.",
    4:"You can contact us on our contact form on this page or you can reach us directly at info@placeofhome.org or (832) 570-8833.",
    5:"You can request any store, experience, and restaurant to feature if you are under the core or premium plan.",
    6:"You can get customed designs approved by you if you are under the premium plan. If you are under our core plan you will have options of pre-made designs that you can choose from before hand.",

}

function minimizeAllFaqAnswers()
{
    let answerBoxId = '';
    for(let questionNumber = 1; questionNumber < 7; questionNumber += 1)
    {
        answerBoxId = "faqBoxAnswer" + questionNumber.toString()
        if (document.getElementById(answerBoxId).innerHTML != ``)
        {
            minimizeFaqAnswer(questionNumber);
        }
    }
}

function generateFaqAnswer(questionNumber)
{
    minimizeAllFaqAnswers();

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

function sendMessageOnClick()
{
    document.getElementById("sendMessageButton").disabled = true;
    sendMessage( function(responseMessage)
        {

            if(responseMessage == "Successfully sent message!")
            {
                alert(responseMessage);
                location.reload();
            }else
            {
                alert(responseMessage);
                document.getElementById("sendMessageButton").disabled = false;
            }
        });
}

function sendMessage(callBack = null)
{

    let params = {
        "organization": "placeOfHome",
        "token": "3c66b47e0371e080cdd49724b1c0289fabb0870bcdca51fde6eb4102defaadab",
        "name" : document.getElementById("clientName").value,
        "reason" : document.getElementById("clientReason").value,
        "email" : document.getElementById("clientEmail").value,
        "message": document.getElementById("clientMessage").value
    };
    
    endpointCall("sendMessage", params, function(data)
                                {
                                    //Store id and name in cookies for later use
                                    if(data["status"] == "success")
                                    {
                                        callBack('Successfully sent message!');
                                    }else if(data["status"] == "failed")
                                    {
                                        callBack("Failed to send message. Please try again!");
                                    }
                                });
}