let hasDownloadedResume = false
const myName = "Tanner"; 

function showGreeting () {
    const greetingMessage = "Hello, my name is " + myName + "! Welcome to my portfolio!";
    document.getElementById("greetingDisplay").textContent = greetingMessage;
}
showGreeting();

document.getElementById("resumeButton").addEventListener("click", resumeAlert);

function resumeAlert () {
    if (!hasDownloadedResume) {
    alert ("Resume has been succefully dowonloaded!")
    hasDownloadedResume = true;
    }
}

function daysUntilDeadline(deadline) {
    let currentDate = new Date();
    let end = new Date(deadline);
    let timeDifference = end - currentDate;
    let remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return remainingDays;
}

let deadline = '2026-04-21';
let numberDaysUntilDeadline = daysUntilDeadline(deadline);
document.getElementById("daysLeft").textContent = numberDaysUntilDeadline;

daysUntilDeadline();