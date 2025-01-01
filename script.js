const input = document.querySelector('.input');
const copy = document.querySelector('.bx bxs-copy-alt');
const button = document.querySelector('.btn')
const alertContainer = document.querySelector('.alert-container.active');

button.addEventListener('click', () => {
    createPassword();
});

copy.addEventListener("click", () => {
    copyPassword();
    if (input.value){
        alertContainer.classList.add('active');
        setTimeout(() => {
            alertContainer.classList.remove('active');
        }, 2000); 
    }
});

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14; 
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    input.value = password;
}

function copyPassword() {
    input.select();
    input.setSelectionRange(0,9999);
    navigator.clipboard.writeText(input.value);
}