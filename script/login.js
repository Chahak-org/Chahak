const loginButton = document.getElementById('loginButton');
const loginName = document.getElementById('loginName');
const loginPassword = document.getElementById('loginPassword');

loginButton.addEventListener('click', () => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData) {
        const enteredUsername = loginName.value;
        const enteredPassword = loginPassword.value;

        if (
            storedUserData.fullName === enteredUsername &&
            storedUserData.password  === enteredPassword
        ) {
            storedUserData.isLoggedIn = true; // Mark user as logged in
            localStorage.setItem('userData', JSON.stringify(storedUserData));

            alert('लॉगिन सफल!');
            window.location.href = 'dashboard.html';
        } else {
            alert('उपयोगकर्ता नाम या पासवर्ड गलत है।');
        }
    } else {
        alert('कोई उपयोगकर्ता नहीं मिला। कृपया पहले साइन अप करें।');
    }
});

