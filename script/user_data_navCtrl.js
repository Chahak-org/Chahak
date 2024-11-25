document.addEventListener("DOMContentLoaded", function () {
    const openIcon = document.getElementById("open");
    const closeIcon = document.getElementById("close");
    const modules = document.querySelector(".modules");
    const logoutButton = document.getElementById("logout");

    //Logout
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

    // Function to show the modules and toggle icons
    function openMenu() {
              
        openIcon.style.display = "none"; // Hide open icon
        closeIcon.style.display = "inline"; // Show close icon
        modules.style.right = '8%';
    }

    // Function to hide the modules and toggle icons
    function closeMenu() {    
        
        openIcon.style.display = "inline"; // Show open icon
        closeIcon.style.display = "none"; // Hide close icon
        modules.style.right = '120%';
    }

    

    // Event listeners for opening and closing the menu
    openIcon.addEventListener("click", openMenu);
    closeIcon.addEventListener("click", closeMenu);

    // Close menu when clicking any link inside the modules section
    const moduleLinks = modules.querySelectorAll("a"); // Select all links inside .modules
    moduleLinks.forEach(link => {
        link.addEventListener("click", closeMenu); // Add click event to close the menu
    });


});
