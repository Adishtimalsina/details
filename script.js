function darkLight(){
    var element = document.body;
    element.classList.toggle("darkMode");
}


var beepOnce = $("#beep")[0];
$("#boxes div")
.mouseenter(function(){
    let audio = document.getElementById("beep");
    audio.volume = 0.1;
    beepOnce.pause();
    beepOnce.play();
})

function hideEmail(){
    $(".myEmail").hide();
    
}
function showEmail(){
    $(".myEmail").show();
}
function hidePhone(){
    $(".myPhone").hide();
    
}
function showPhone(){
    $(".myPhone").show();
}

function hideFacebook(){
    $(".myFacebook").hide();
    
}
function showFacebook(){
    $(".myFacebook").show();
}

function hideInstagram(){
    $(".myInstagram").hide();
    
}
function showInstagram(){
    $(".myInstagram").show();
}

function hideGithub(){
    $(".myGithub").hide();
    
}
function showGithub(){
    $(".myGithub").show();
}
