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
    const moduleId = Number(getParameterByName('moduleId')); // Retrieve moduleId from URL
    // const MID = Result === "Pass" ? moduleId + 1 : moduleId - 1; // Increment or decrement MID

    // // Redirect to the new URL with updated moduleId
    // window.location.href = `user.html?name=${Name}&moduleId=${MID}&type=R&result=${Result}`;

    // ---->


    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (!storedUserData) {
        alert('User data not found! Please log in again.');
        window.location.href = 'login.html';
        return;
    }

    if (Result === "Pass") {
        completeModule(moduleId); // Mark the current module as completed
        const nextModuleId = moduleId + 1; // Move to the next module
        window.location.href = `user.html?name=${Name}&moduleId=${nextModuleId}&type=R&result=${Result}`;
    } else {
        const previousModuleId = Math.max(1, moduleId - 1); // Prevent going below module 1
        alert('आप परीक्षा में असफल हो गए हैं। पिछले मॉड्यूल पर वापस जा रहे हैं।');
        window.location.href = `user.html?name=${Name}&moduleId=${previousModuleId}&type=R&result=${Result}`;
    }

}

function completeModule(moduleId) {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData) {
        if (!storedUserData.completedModules) {
            storedUserData.completedModules = [];
        }

        if (!storedUserData.completedModules.includes(moduleId)) {
            storedUserData.completedModules.push(moduleId);
            localStorage.setItem('userData', JSON.stringify(storedUserData));
            alert(`मॉड्यूल ${moduleId} पूरा हो गया है!`);
        } else {
            console.log(`मॉड्यूल ${moduleId} पहले ही पूरा किया जा चुका है।`);
        }
    }
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