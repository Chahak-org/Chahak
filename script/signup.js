const fullName = document.getElementById("FN");
const contact = document.getElementById('CN');
const password = document.getElementById('PW');
const SignUpButton = document.getElementById('SB');


SignUpButton.addEventListener('click', (e) => {
    let isValid = true;
    if(fullName.value === ""){
        fullName.style.borderRightColor = "#D10000";
        isValid = false;
    }else{
        fullName.style.borderRightColor = "black";
    }
    if(contact.value === ""){
        contact.style.borderRightColor = "#D10000";
        isValid = false;
    }else{
        contact.style.borderRightColor = "black";
    }
    if(password.value === ""){
        password.style.borderRightColor = "#D10000";
        isValid = false;
    }else{
        password.style.borderRightColor = "black";
    }

    if(isValid){
        console.log(`NAME: ${fullName.value} CONTACT: ${contact.value} PASSWORD: ${password.value}`);
        const name = encodeURIComponent(fullName.value);
        window.open(`user.html?name=${name}`,'_blank');
        window.close();
    }
})
