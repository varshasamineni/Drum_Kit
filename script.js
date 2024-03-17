var drums = document.querySelectorAll("button");

for(var i=0; i<drums.length; i++){
    drums[i].addEventListener("click", function (){

        var buttonInnerHtml = this.innerHTML;

        playSound(buttonInnerHtml);
        addAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keydown", function (event){
    var btn = event.key;
    playSound(btn);
    addAnimation(btn);
});

function playSound(btn){
    switch (btn) {
        case 'w':
            var audio = new Audio("Drum-Kit_sounds_tom-1.mp3");
            audio.play();        
            break;
        case 'a':
            var audio = new Audio("Drum-Kit_sounds_tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("Drum-Kit_sounds_tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("Drum-Kit_sounds_tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("Drum-Kit_sounds_snare.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("crash.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("Drum-Kit_sounds_kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(btn);
            break;
    }
}

function addAnimation(btn){
    var activeButton = document.querySelector("."+btn);
    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);
}