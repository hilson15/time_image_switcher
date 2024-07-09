document.addEventListener("DOMContentLoaded", function() {
    const imageElement = document.getElementById("image");
    const writeupElement = document.getElementById("greetings");
    
    // Function to update time display
    function updateTime() {
        const timeNow = new Date();
        const hour = timeNow.getHours();
        const minutes = timeNow.getMinutes();
        document.getElementById('see_time').innerHTML = `${hour}:${minutes}`;
    }
    // Initial update
    updateTime();

    // Update time every minute (60,000 milliseconds)
    setInterval(updateTime, 60000);

    // Get the current hour of the day
    const currentHour = new Date().getHours();

    // Audio element
    const alarmAudio = document.getElementById("myAlarm");

    // Function to play audio
    function playAlarm() {
        alarmAudio.currentTime = 0; // Reset audio to start
        alarmAudio.play();
    }
     

    // Set images and writeups based on the time of day
    if (currentHour >= 6 && currentHour < 12) { // Morning (6am to 11:59am)
        imageElement.src = "rise.jpg";
        writeupElement.innerHTML = '<span style="color: yellow; background:black; padding:2px 8px; opacity:2; border-radius:50%;">☀️</span> Hi, Good morning! The sun is rising and the day is beginning.';
        playAlarm();
      
    } else if (currentHour >= 12 && currentHour < 17) { // Afternoon (12pm to 4:59pm)
        imageElement.src = "shine.jpg";
        writeupElement.innerHTML = `<span style="color: yellow; background:black; padding:2px 8px; opacity:2; border-radius:50%;">🌞</span> Good afternoon Buddie! The sun is high in the sky.`;
        playAlarm();
        
    } else if (currentHour >= 17 && currentHour < 19) { // Evening (5pm to 6:59pm)
        imageElement.src = "set.jpg";
        writeupElement.innerHTML = `<span style="color: yellow; background:black; padding:2px 8px; opacity:2; border-radius:50%;">🌇</span>Good evening! The sun is setting and the day is winding down.`;
        playAlarm();
        
    } else { // Night (8pm to 4:59am)
        imageElement.src = "night.jpg";
        writeupElement.innerHTML = `<span style="color: yellow; background:black; padding:2px 8px; opacity:2; border-radius:50%;">🌙</span>Good night! The moon is shining bright in the night sky.`;
        playAlarm();
       
    }
});


const timeNow = new Date();
const hour = timeNow.getHours();
const minutes = timeNow.getMinutes();
document.getElementById('see_time').innerHTML = hour+ ":" +minutes;

function  morn_eve(){
    if(hour < 12){
        document.getElementById('identify').innerHTML = "AM";
    }else{
        document.getElementById('identify').innerHTML= "PM";
    }
    
}
morn_eve();


