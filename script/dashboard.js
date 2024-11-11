const storedUserData = JSON.parse(localStorage.getItem('userData'));
const welcomeMessage = document.getElementById('welcomeMessage');
const moduleList = document.getElementById('moduleList');
const continueButton = document.getElementById('continueButton');
const logoutButton = document.getElementById('logoutButton');

if (!storedUserData) {
    alert('कृपया पहले लॉगिन करें।');
    window.location.href = 'login.html';
} else {
    // Show welcome message
    welcomeMessage.innerText = `${storedUserData.fullName}`;

    // Display completed modules
    const completedModules = storedUserData.completedModules || [];
    if (completedModules.length > 0) {
        completedModules.forEach(module => {
            const li = document.createElement('li');
            li.innerText = `मॉड्यूल ${module}`;
            moduleList.appendChild(li);
        });
    } else {
        moduleList.innerHTML = '<li>कोई मॉड्यूल पूरा नहीं हुआ है।</li>';
    }

    // Continue button logic
    continueButton.addEventListener('click', () => {
        const lastModule = completedModules.slice(-1)[0] || 1;
        const type = (lastModule % 2 === 0) ? 'Q' : 'R'; // Example logic for type
        window.location.href = `user.html?moduleId=${lastModule}&type=${type}`;
    });

    // Logout button logic
    logoutButton.addEventListener('click', () => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
    
        if (storedUserData) {
            // Set the user as logged out by updating a flag
            storedUserData.isLoggedIn = false;
            localStorage.setItem('userData', JSON.stringify(storedUserData));
        }
    
        alert('लॉगआउट सफल!');
        window.location.href = 'login.html';
    });
    
}
