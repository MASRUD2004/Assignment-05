document.addEventListener('DOMContentLoaded', function() {
    // Redirects to the 'faq.html' page
    function goToPage2() {
        window.location.href = 'faq.html';
    }

    const button = document.getElementById('navigate-button');

    if (button) {
        button.addEventListener('click', goToPage2);
    } else {
        console.error("Button not found");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Redirects to the 'index.html' page (home page)
    const backToDeskButton = document.getElementById('back-to-desk');

    if (backToDeskButton) {
        backToDeskButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    } else {
        console.error("Button not found");
    }
});



