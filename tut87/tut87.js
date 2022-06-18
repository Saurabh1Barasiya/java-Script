console.log("This is tutorial 54");
// const alarmSubmit = document.getElementById('alarmSubmit');

// Add an event listener to the submit button
/*
alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

// function to play the alarm ring tone
function ringBell() {
    audio.play();
}

// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now")
            ringBell();
        }, timeToAlarm);
    }
}
*/

// its time to write our own code...
// we will use the setTimeout function to set the alarm.
// we will use the clearTimeout function to cancel the alarm.
// we will use the setInterval function to check the alarm time.
// we will use the clearInterval function to cancel the check.
// we will use the Date object to get the current time.
// we will use the Date object to get the alarm time.
// we will use the Date object to get the time to alarm.
// we will use the Date object to get the time to check.


// new Date().getTime() --> Number of milliseconds since January 1, 1970 00:00:00.
var music = new Audio("./my.mp3")
const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('alarmSubmit clicked');
    const alarm = document.getElementById('alarm');
    if (alarm.value === '') {
        console.log('alarm is empty');
        alert("Please enter a time");
        return;
    }else{
        const alarmTime = new Date(alarm.value);
        if(alarmTime.getTime()>=new Date().getTime()){
        console.log('alarm set');
        setTimeout(()=>{
            console.log('alarm ringing');
            music.play();
        },alarmTime.getTime()-new Date().getTime());
    }
}    
});

const cancel = document.getElementById('Pause');
cancel.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cancel clicked');
    music.pause();
});
