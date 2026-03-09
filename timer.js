let time = 3600; 
let interval;

function updateTimer(){

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if(seconds < 10){
        seconds = "0" + seconds;
    }

    document.getElementById("time").innerText = minutes + ":" + seconds;
}

function startTimer(){

    interval = setInterval(function(){

        if(time > 0){
            time--;
            updateTimer();
        }
        else{
            clearInterval(interval);
            document.getElementById("message").innerText = "Time is up!";
        }

    },1000);
}

function pauseTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    time = 3600;
    updateTimer();
    document.getElementById("message").innerText = "";
}

updateTimer();