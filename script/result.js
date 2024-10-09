 // Function to retrieve URL parameters
 function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve data from the URL parameters
    const userName = getParameterByName('name');
    const timeTaken = getParameterByName('time');
    const totalMarks = getParameterByName('marks');
    const percentage = getParameterByName('percentage');
    const passFail = getParameterByName('status');

    // Display the retrieved data on the page
    document.getElementById('userName').innerHTML = `${decodeURIComponent(userName)}`;
    document.getElementById('timeTaken').innerHTML = `${decodeURIComponent(timeTaken)}`;
    document.getElementById('percentage').innerHTML = `${decodeURIComponent(percentage)} %`;
    document.getElementById('passFail').innerHTML = `${encodeURIComponent(passFail)}`;
});

function done() {
    const Name = encodeURIComponent(getParameterByName('name'));
    const Result = encodeURIComponent(getParameterByName('status'));
    window.location.href = `user.html?name=${Name}&result=${Result}`;
}




//////
const PassMarks = decodeURIComponent(getParameterByName('percentage'));

let progressValue = 0;
let progressEndValue =  parseInt(PassMarks); // Set the target value (75% in this case)
let speed = 50; // Speed of the progress animation

let progress = setInterval(() => {
    document.getElementById("progress-text").textContent = `${progressValue}%`;
    document.querySelector(".progress-circle").style.background = `conic-gradient(#4caf50 ${progressValue * 3.6}deg, #ddd ${progressValue * 3.6}deg)`;
    if (progressValue === progressEndValue) {
        clearInterval(progress);
    }
    progressValue++;
}, speed);