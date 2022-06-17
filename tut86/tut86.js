// how to play a audio.
console.log("Play a audio");
// function play() {
//     // var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
//     // audio.play();


//     var audio = new Audio('./my.mp3');
//     audio.play();
//   }

// function pauseAudio() {
//     audio.pause();
// }


var audio = new Audio('./my.mp3');
function play(){
    audio.play();
}
function pause(){
    audio.pause();
}
document.getElementById("play").addEventListener("click", play);
document.getElementById("pause").addEventListener("click", pause);

