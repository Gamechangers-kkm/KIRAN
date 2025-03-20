document.addEventListener("DOMContentLoaded", function () {
    // Select the search input field
    const searchInput = document.querySelector("#searchInput"); // Using ID selector for accuracy

    // Select all anime cards (each div inside .container)
    const animeCards = document.querySelectorAll(".container > div");

    // Debugging: Check if elements are found
    if (!searchInput) {
        console.error("Search input field not found!");
        return;
    }
    if (animeCards.length === 0) {
        console.error("No anime cards found!");
        return;
    }

    // Listen for input event on the search field
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase().trim();
        console.log("Search Query:", query); // Debugging check

        // Loop through each anime card and check if its title matches the search query
        animeCards.forEach(card => {
            const titleElement = card.querySelector("h3");
            if (!titleElement) return; // Skip if no title found
            
            const title = titleElement.textContent.toLowerCase();

            // Show or hide based on match
            card.style.display = title.includes(query) ? "" : "none";
        });
    });
});




