
var min = 0;
var sec = 0;
var msec = 0;
var minhead = document.getElementById("minute")
var seche = document.getElementById("second")
var mseche = document.getElementById("milliSecond")

var interval;
function timer(){
msec++;
mseche.innerHTML = msec;


if(msec >= 100){
    msec = 0;
    sec++;
    seche.innerHTML = sec;
}
else if(sec >= 6){
    min++
    minhead.innerHTML = min
    sec = 0
}

}
function start(){
    interval = setInterval(timer,10)
    var disable = document.getElementById("dsiable")
    disable.disabled = 'true'
}
function stop(){
    clearInterval(interval)
    var enable = document.getElementById("dsiable")
    enable.disabled = false
}
function reset(){
    min = 0;
 sec = 0;
 msec = 0;
 minhead.innerHTML = min
 seche.innerHTML = sec
 mseche.innerHTML = msec
 clearInterval(interval)
 var enable = document.getElementById("dsiable")
 enable.disabled = false
}