//Ethan Klassen (30211435)
//Ziad Hamed (30216545)

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    const messageBox = document.getElementById("message-box");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => {
                const user = users.find(u => u.username === username && u.email === password);
                if (user) {
                    showMessage("Login successful! Redirecting...", "success");
                    setTimeout(() => {
                        window.location.href = "course_view.html";
                    }, 2000);
                } else {
                    showMessage("Invalid username or password!", "error");
                }
            })
            .catch(error => {
                showMessage("Error fetching user data. Please try again.", "error");
                console.error("Error fetching users:", error);
            });
    });

    function showMessage(message, type) {
        messageBox.textContent = message;
        messageBox.className = "message-box " + type;
        messageBox.style.display = "block";
    }
});
