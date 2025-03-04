document.addEventListener('DOMContentLoaded', function() {
    // Function to navigate to another webpage
    function goToPage2() {
        window.location.href = 'faq.html';  // Redirect to page2.html
    }

    // Get the button by its ID
    const button = document.getElementById('navigate-button');

    // Check if the button exists
    if (button) {
        // Add event listener for click event to navigate
        button.addEventListener('click', goToPage2);
    } else {
        console.error("Button not found");
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Get the "Back To Desk" button by ID
    const backToDeskButton = document.getElementById('back-to-desk');

    // Check if the button exists
    if (backToDeskButton) {
        // Add event listener for click event to navigate to the home page
        backToDeskButton.addEventListener('click', function() {
            window.location.href = 'index.html';  // Redirect to the home page (adjust the URL if needed)
        });
    } else {
        console.error("Button not found");
    }
});


