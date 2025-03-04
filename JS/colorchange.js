function getRandomFaintColor() {
    // Generate a random faint color using rgba values with high transparency
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let alpha = Math.random() * 0.3 + 0.2;  // alpha between 0.2 and 0.5 for faintness
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomFaintColor();
}
// Select the button by its ID
const button = document.getElementById('color-button');

// Add an event listener to the button
button.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomFaintColor();
});