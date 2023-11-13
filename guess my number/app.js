var input = document.getElementById("input")
var button = document.getElementById("button");
var highscore = document.getElementById("highscore")
var score = document.getElementById("score")
var mainDiv = document.getElementById("mainDiv")
var start = document.getElementById("start");
var qMark = document.getElementById("markq");
var randomNumebr = Math.floor(Math.random()*20+1)
button.addEventListener("click",function (){
    if(input.value == randomNumebr){
        mainDiv.style.backgroundColor = "green";
        start.innerHTML = "Congratulations! You Win";
        qMark.innerHTML = randomNumebr;
        score.innerHTML = +score.innerHTML + 10;
        highscore.innerHTML = +highscore.innerHTML + +score.innerHTML
    }else if(input.value < randomNumebr){
        start.innerHTML = "Too low"
        score.innerHTML = +score.innerHTML - 1;
    }else{
        score.innerHTML = +score.innerHTML - 1;
        start.innerHTML = "Too high"
    }
})
var again = document.getElementById("again");
again.addEventListener("click",function(){
    window.location.reload()
})
