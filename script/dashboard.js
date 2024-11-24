import { ModuleData } from "./user_data.js";

const storedUserData = JSON.parse(localStorage.getItem('userData'));
const welcomeMessage = document.getElementById('welcomeMessage');
// const moduleList = document.getElementById('moduleList');
const continueButton = document.getElementById('continueButton');
const logoutButton = document.getElementById('logoutButton');

if (!storedUserData) {
    alert('कृपया पहले लॉगिन करें।');
    window.location.href = 'login.html';
} else {
    // Show welcome message
    welcomeMessage.innerText = `${storedUserData.fullName}`;

    // Display certificate
    const completedModules = storedUserData.completedModules || [];
    if (completedModules.length === 36) {
       document.getElementById('certificate').style.display = "block";
       document.getElementById('continueButton').style.display = "none";
    } else {
        document.getElementById('certificate').style.display = "none";
        document.getElementById('continueButton').style.display = "block";
        // moduleList.innerHTML = '<li>कोई मॉड्यूल पूरा नहीं हुआ है।</li>';
    }

    // Continue button logic
    continueButton.addEventListener('click', () => {
        const lastModule = completedModules.slice(-1)[0] || 1;
        const name = storedUserData.fullName;  
        window.location.href = `user.html?moduleId=${lastModule}&name=${name}`;
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


//logic for certificate
document.getElementById('certificate').addEventListener('click', async () => {
    // Create the SVG loading element
    const loadingGif = document.createElement('div');
    loadingGif.innerHTML = `
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="#000">
            <circle cx="50" cy="50" r="45" stroke-width="10" stroke="#ccc" fill="none" />
            <path d="M50 5 a 45 45 0 0 1 0 90 a 45 45 0 0 1 0 -90" stroke-width="10" stroke="#000" fill="none">
                <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1s" repeatCount="indefinite"/>
            </path>
        </svg>
    `;
    loadingGif.style.position = 'fixed';
    loadingGif.style.top = '50%';
    loadingGif.style.left = '50%';
    loadingGif.style.transform = 'translate(-50%, -50%)';
    loadingGif.style.zIndex = '1000';
    document.body.appendChild(loadingGif);

    try {
        // Load the template
        const existingPdfBytes = await fetch('assest/ctemp.pdf').then(res => res.arrayBuffer());
        const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);

        // Get the first page
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];

        // Set font
        const font = await pdfDoc.embedFont(PDFLib.StandardFonts.TimesRoman); // Times of India equivalent
        const fontSize = 24;
        const { width, height } = firstPage.getSize();

        // Dynamic data
        const NameOfCandidate = storedUserData.fullName || 'Unknown User';
        const SchoolOfCandidate = storedUserData.schoolName || 'Unknown School';
        const CurrentTime = new Date().toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        }).replace(/ /g, ' '); // e.g., 24th Nov 2024

        // Add dynamic text
        firstPage.drawText(NameOfCandidate, { x: 280, y: height - 240, size: fontSize, font, color: PDFLib.rgb(0, 0, 0) });
        firstPage.drawText(SchoolOfCandidate, { x: 215, y: height - 263, size: fontSize, font, color: PDFLib.rgb(0, 0, 0) });
        firstPage.drawText(CurrentTime, { x: 505, y: height - 285, size: fontSize, font, color: PDFLib.rgb(0, 0, 0) });

        // Serialize the PDF to bytes and trigger a download
        const pdfBytes = await pdfDoc.save();

        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'certificate.pdf';
        link.click();
    } catch (error) {
        console.error('Error generating certificate:', error);
    } finally {
        document.body.removeChild(loadingGif);
    }
});