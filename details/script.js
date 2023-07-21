function darkLight(){
    var element = document.body;
    element.classList.toggle("darkMode");
}

// let more = document.querySelector("#naa");
// let audio = document.getElementById('beep');
// more.addEventListener('mouseenter', function() {
// audio.play();
// });


var beepOnce = $("#beep")[0];
$("#boxes div")
.mouseenter(function(){
    let audio = document.getElementById("beep");
    audio.volume = 0.1;
    beepOnce.pause();
    beepOnce.play();
})