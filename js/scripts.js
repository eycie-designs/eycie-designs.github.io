window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    // Add the "loader-hidden" class
    loader.classList.add("loader-hidden");

    // Check if the "loader-hidden" class has been added
    if (loader.classList.contains("loader-hidden")) {
        console.log("loader-hidden class has been added");
    }

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(document.querySelector(".loader"));
    });
});
