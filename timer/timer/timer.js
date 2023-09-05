var seconds = 10;
    
function countdown() {
    seconds = seconds - 1;
    if (seconds < 0) {
        // Chnage my link here
        window.location = "../timer/coucou/coucou.html";
    } else {
        // Change remaining seconds
        document.getElementById("countdown").innerHTML = seconds;

        window.setTimeout("countdown()", 1000);
    }
}


countdown();


