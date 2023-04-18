let sliderElement = document.querySelector("#slider");
let btnElement = document.querySelector("#button");
let sizePassword = document.querySelector("#value");
let Password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = 'abcdefghijlkmnopqrsuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
};

function generatePassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    Password.innerHTML = pass;
    newPassword = pass;
}

function copPassword() {
    navigator.clipboard.writeText(newPassword);
    alert("Senha copiada com sucesso!");
}

console.log(newPassword);





