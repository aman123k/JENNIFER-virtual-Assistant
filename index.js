const btn = document.querySelector(".start-btn");
const contant = document.querySelector(".contant");

function speak(sentence) {
    const computer = new SpeechSynthesisUtterance(sentence);
    computer.pitch = 1;
    computer.rate = 1;
    window.speechSynthesis.speak(computer);
}
function condition() {
    let day = new Date();
    let hour = day.getHours();
    if (hour >= 0 && hour < 12) {
        speak("Good morning Sir");
    }
    else if (hour == 12) {
        speak("Good afternoon Sir");
    }

    else if (hour > 12 && hour <= 15) {
        speak("Good afternoon Sir");
    }
    else {
        speak("Good evening sir");
    }
}
window.addEventListener('load', () => {
    speak("Activating JENNIFER");
    speak("going live  Sir");
    condition();
})

const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    // console.log(current)
    const transcript = event.results[current][0].transcript;
    contant.textContent = transcript;
    speakThis(transcript.toLowerCase());
}
btn.addEventListener("click", () => {
    recognition.start();
});

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = " i don't understand what you said please try again";

    if (message.includes("hey") || message.includes("hello") || message.includes("hi") || message.includes("hay")) {
        const finalText = `Hello,
        it's really good to hear you Sir`;
        speech.text = finalText;
    }
    else if (message.includes("how old are you")) {
        const finalText = `I launched yesterday,
        so technically I'm a baby.
        But I've learned so much! 
        I hope I'm wise beyond my year`;
        speech.text = finalText;
    }
    else if (message.includes("how are you")) {
        const finalText = "I am fine sir, tell me how can i help you";
        speech.text = finalText;
    }
    else if (message.includes("who are you") || message.includes("name") || message.includes("about yourself")) {
        const finalText = `My name is JENNIFER ,
         your personal virtual assistant`;
        speech.text = finalText;
    }
    else if (message.includes("i love you")) {
        const finalText = `Aww! 
        We are a match made in heaven
        don't you think? `;
        speech.text = finalText;
    }
    else if (message.includes("open google")) {
        window.open("https://www.google.com", "_blank")
        const finalText = "Opening Google";
        speech.text = finalText;
    }
    else if (message.includes("open youtube")) {
        window.open("https://www.youtube.com", "_blank")
        const finalText = "Opening Youtube";
        speech.text = finalText;
    }
    else if (message.includes("open instagram")) {
        window.open("https://www.instagram.com", "_blank")
        const finalText = "Opening instagram";
        speech.text = finalText;
    }
    else if (message.includes("open facebook")) {
        window.open("https://www.facebook.com", "_blank")
        const finalText = "Opening facebook";
        speech.text = finalText;
    }
    else if (message.includes("play")) {
        window.open(`https://www.youtube.com/search?q=${message.replace(" ", "+")}`, "_blank")
        const finalText = "playing on youtube";
        speech.text = finalText;
    }
    else if (message.includes("who is") || message.includes("what is") || message.includes("what are")) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is, what i found on internet regardinng" + message;
        speech.text = finalText;
    }
    else if (message.includes("joke")) {
        const finalText = `Knock! Knock!
        Who's there?
        Control freak.
        Con...
        Okay now you say, "Control freak who?"`;
        speech.text = finalText;
    }
    else if (message.includes("time")) {
        const time = new Date().toLocaleString("undefine", { hour: "numeric", minute: "numeric" })
        const finalText = time;
        speech.text = finalText;
    }
    else if (message.includes("day") || message.includes("month")) {
        const day = new Date().toLocaleString("undefine", { month: "short", day: "numeric" })
        const finalText = day;
        speech.text = finalText;
    }
    else if (message.includes("open calculator")) {
        window.open(`https://www.google.com/search?q=calculator&rlz=1C1SQJL_enIN971IN971&oq=&aqs=chrome.0.35i39i362l8.83515j0j7&sourceid=chrome&ie=UTF-8`, "_blank");
        const finalText = "Opening calculator";
        speech.text = finalText;
    }
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = " I found some text information for " + message + "on google";
        speech.text = finalText;
    }
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
}