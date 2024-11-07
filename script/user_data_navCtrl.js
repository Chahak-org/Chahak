document.addEventListener("DOMContentLoaded", function () {
    const openIcon = document.getElementById("open");
    const closeIcon = document.getElementById("close");
    const modules = document.querySelector(".modules");

    // Function to show the modules and toggle icons
    function openMenu() {
              
        openIcon.style.display = "none"; // Hide open icon
        closeIcon.style.display = "inline"; // Show close icon
        modules.style.right = '0%';
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
