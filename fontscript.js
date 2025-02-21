document.addEventListener("DOMContentLoaded", () => {
    const fontButtons = document.querySelectorAll(".font-options button");
    const readingArea = document.querySelector(".reading-area");

    fontButtons.forEach(button => {
        button.addEventListener("click", () => {
            fontButtons.forEach(btn => btn.classList.remove("active")); // Remove previous active class
            button.classList.add("active"); // Add active class to clicked button
            
            let font = button.innerText;
            switch (font) {
                case "Default":
                    readingArea.style.fontFamily = "Arial, sans-serif";
                    break;
                case "Roboto":
                    readingArea.style.fontFamily = "'Roboto', sans-serif";
                    break;
                case "Dyslexic":
                    readingArea.style.fontFamily = "'Open Dyslexic', sans-serif";
                    break;
                case "Lora":
                    readingArea.style.fontFamily = "'Lora', serif";
                    break;
            }
        });
    });

    // Font size slider
    const fontSizeSlider = document.getElementById("fontSizeSlider");
    fontSizeSlider.addEventListener("input", (event) => {
        readingArea.style.fontSize = `${event.target.value}px`;
    });

    // Close modal with Escape key
    document.addEventListener("keydown", (event) => {
        const modal = document.getElementById("settingsModal");
        if (event.key === "Escape" && modal.style.display === "flex") {
            modal.style.display = "none";
        }
    });
});

