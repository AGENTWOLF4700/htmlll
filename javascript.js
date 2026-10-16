const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {

    // Add or remove dark-mode class
    document.body.classList.toggle("dark-mode");

    // Change button text
    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }

});