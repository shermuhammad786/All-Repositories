function start(){
    var input = document.getElementById("input")
    if(input.value){
        window.location.assign("./Quiz.html")
        alert(`Welcome to Quiz Mr: ${input.value}`);
    }
    else{
        alert("Plaese Enter Your Name")
    }
    
    
}