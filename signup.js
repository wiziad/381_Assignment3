//Ethan Klassen (30211435)
//Ziad Hamed (30216545)
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    const messageBox = document.getElementById("message-box");
    
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        messageBox.innerHTML = "";
        messageBox.style.display = "none";
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const email = document.getElementById("email").value;
        
        let errors = [];
        

        if (!/^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/.test(username)) {
            errors.push("Invalid username: Must be 3-20 characters, start with a letter, and contain only letters, numbers, hyphens, or underscores.");
        }
        

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\[\]{}|;:'\",.<>?/`~]).{8,}$/.test(password)) {
            errors.push("Invalid password: Must be at least 8 characters, include uppercase, lowercase, a number, and a special character.");
        }
        

        if (password !== confirmPassword) {
            errors.push("Passwords do not match.");
        }
        

        if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email)) {
            errors.push("Invalid email: Must be in a proper format (e.g., user@example.com).");
        }
        

        if (errors.length > 0) {
            messageBox.style.display = "block";
            messageBox.innerHTML = errors.join("<br>");
        } else {
            messageBox.style.display = "block";
            messageBox.innerHTML = "Signup successful! Redirecting to login...";
            
            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
        }
    });
});
