document.addEventListener('DOMContentLoaded', function() {
    // Set loader and content class
    const loader = document.querySelector("#loader");
    const content = document.querySelector("#content");
    
    // Apply changes in display whenever index page loaded up
    setTimeout(function() {
        loader.style.display = "none";
        loader.style.opacity = "0";
        content.style.display = "block";
    }, 4500);
});
