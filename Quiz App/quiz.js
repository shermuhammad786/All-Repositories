var Questinsarray = [
    {
        question: "Full Form Of Ram is?",
        answer: "Random Access Memory",
        Option: [
            "Random Access Memory",
            "Random Actual Memory",
            "Random axis Memory",
            "Randoom Exit Memory",
        ]
    },
    {
        question: "What is ROM?",
        answer: "Read Only Memory",
        Option: [
            "Read online Memory",
            "Read out Messages",
            "None of the above",
            "Read Only Memory",
        ]
    },
    {
        question: "What is CPU?",
        answer: "Centeral processing Unit",
        Option: [
            "Centeral programming Unit",
            "Centeral processing Unit",
            "Centeral passing Unit",
            "Centeral power Unit",
        ]
    },
    {
        question: "Full Form OF USB?",
        answer: "Universal Bus Serail",
        Option: [
            "Universal Bus Service",
            "Universal Business Serail",
            "Universal Bus Serail",
            "Universal Busses Serail",
        ]
    },
]
var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var input3 = document.getElementById("input3")
var input4 = document.getElementById("input4")
var nextbtnn = document.getElementById("nextbtnn")
let submitt = document.getElementById("submit");
submitt.style.display = "none"
var showScore = document.getElementById("showScore")



var bttn = document.getElementById("btn");
var newcount = 0;
function showQuestions(e) {
    //Show Questions
    var quest = document.getElementById("Questions")
    quest.innerHTML = Questinsarray[e].question

    //Show Anwers
    var ans = document.getElementsByClassName("opt")
    for (var i = 0; i < ans.length; i++) {
        ans[i].innerHTML = Questinsarray[e].Option[i]
        var score = document.getElementsByClassName("Score")
        score[i].value = Questinsarray[e].Option[i];
    }
    if (newcount++ == Questinsarray.length - 1) {
        nextbtnn.style.display = "none";
        submitt.style.display = "block"
    }
}

var questionCount = 0;
function nextquestion() {
    questionCount++;
    showQuestions(questionCount);

    input1.disabled = false;
    input2.disabled = false;
    input3.disabled = false;
    input4.disabled = false;

    input1.style.cursor = "auto";
    input2.style.cursor = "auto";
    input3.style.cursor = "auto";
    input4.style.cursor = "auto";

    input1.checked = false
    input2.checked = false
    input3.checked = false
    input4.checked = false

    bttn.disabled = "disable";

}
bttn.disabled = true;
core = document.getElementById("score");
core.style.display = "none"
var count = 0;
function clickonit(e) {

    if (e.checked == true) {
        bttn.disabled = false;
    }

    if (e.value == Questinsarray[count++].answer) {
        newscore = core.innerHTML = +core.innerHTML + 10
    }
    if (e.disabled = "true") {
        input1.disabled = "true"
        input2.disabled = "true"
        input3.disabled = "true"
        input4.disabled = "true"
        input1.style.cursor = "not-allowed"
        input2.style.cursor = "not-allowed"
        input3.style.cursor = "not-allowed"
        input4.style.cursor = "not-allowed"
    }
}
var modall = document.getElementById("modal")
modall.style.display = "none";

submitt.addEventListener("click", () => {
    modall.style.display = "block";
    showScore.innerHTML = `Your Score is ${newscore}`
})
function clos() {
    if (modall.style.display == "block") {
        modall.style.display = "none";
    }
}

function stTime() {
    var timer = document.getElementById("time")
    timer.innerHTML--
}
setInterval(stTime, 1000)

