var min = 0;
var sec = 0;
var msec = 0;
var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var milliseconds = document.getElementById("msec");
var laps = document.getElementById("Laps");
var interval, count = 0;

function timer() {
    msec++;
    milliseconds.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        seconds.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 60) {
        min++;
        sec = 0;
        minutes.innerHTML = min;
    }
}

function start() {
    interval = setInterval(timer, 10);
    document.getElementById("btnstart").disabled = true;
    document.getElementById("btnstop").disabled = false;
    document.getElementById("btnreset").disabled = false;
    document.getElementById("btnlap").disabled = false;
}
function stop() {
    clearInterval(interval);
    document.getElementById("btnstart").disabled = false;
    document.getElementById("btnstop").disabled = true;
    document.getElementById("btnreset").disabled = false;
    document.getElementById("btnlap").disabled = true;
    document.getElementById("btnstart").value = "Resume";

}
function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    minutes.innerHTML = 0;
    seconds.innerHTML = 0;
    milliseconds.innerHTML = 0;
    laps.innerHTML = "<h2>LAPS</h2>";
    count = 0;
    stop();
    document.getElementById("btnstart").disabled = false;
    document.getElementById("btnstop").disabled = true;
    document.getElementById("btnreset").disabled = true;
    document.getElementById("btnlap").disabled = true;
    document.getElementById("btnstart").value = "Start";
}
function lap() {
    if (count % 5==0) {
        laps.innerHTML = "<h2>LAPS</h2>";
    }
    count++;
    var time = minutes.innerHTML + ":" + seconds.innerHTML + ":" + milliseconds.innerHTML;
    laps.innerHTML += "<h2>" + count + "&nbsp; → &nbsp;" + time + "&nbsp;&nbsp;</h2>";
    
}
