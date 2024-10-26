// Basic login validation
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "user@example.com" && password === "password123") {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard on success
    } else {
        alert("Invalid login credentials!");
    }
});
