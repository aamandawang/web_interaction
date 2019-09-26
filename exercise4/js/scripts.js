var seconds = document.getElementById("timer").textContent;
var countdown = setInterval(function(){
    seconds--;
    (seconds == 1) ? document.getElementById("plural").textContent = "" : document.getElementById("plural").textContent = "";
    document.getElementById("timer").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
},1000);