function checkPasswordStrength(password) {
    let strength = 0;
    let hasLowercase = false;
    let hasUppercase = false;
    let hasNumber = false;
    let hasSpecialChar = false;

    if (password.length < 8) {
        return "Too Short";
    }

    for (let i = 0; i < password.length; i++) {
        let char = password.charAt(i);

        if (char >= 'a' && char <= 'z') {
            hasLowercase = true;
            strength++;
        } else if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
            strength++;
        } else if (char >= '0' && char <= '9') {
            hasNumber = true;
            strength++;
        } else {
            hasSpecialChar = true;
            strength++;
        }
    }

    if (hasLowercase && hasUppercase && hasNumber && hasSpecialChar) {
        return "Strong";
    } else if (hasLowercase && hasUppercase && hasNumber) {
        return "Good";
    } else {
        return "Weak";
    }
}

let password = document.getElementById("password").value;
let result = checkPasswordStrength(password);

function result_func() {
    alert("Password strength: " + result);
}

function toggle() {
    let password = document.getElementById("password");
    let eye = document.getElementById("toggle");
    if (password.getAttribute("type") == "password") {
        password.setAttribute("type", "text");
        eye.style.color = "#0be881";
    }
    else {
        password.setAttribute("type", "password");
        eye.style.color = "#808080";
    }
}