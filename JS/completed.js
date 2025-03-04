function handleClick(button) {
    // Show regular alert for task completion
    if (!confirm("Task completed")) return; // If the user cancels, do nothing

    button.disabled = true; // Disable the clicked button

    let plusCounter = document.getElementById("completed-task");
    let minusCounter = document.getElementById("minus-counter");

    // Increment plusCounter by 1
    plusCounter.textContent = parseInt(plusCounter.textContent) + 1;

    // Decrement minusCounter by 1
    minusCounter.textContent = parseInt(minusCounter.textContent) - 1;

    // Get the current date and time
    let dateTimeString = new Date().toLocaleString();

    // Find the nearest <h2> tag within the same parent container
    let taskTitle = button.closest(".card-body").querySelector("h2").innerText;

    // Create a new history entry div
    let historyEntry = document.createElement("div");
    historyEntry.classList.add("history-item", "flex", "justify-between", "items-center", "p-2", "bg-gray-100", "rounded-md", "mt-2");

    // Create a <p> tag for the task completion message
    let pTag = document.createElement("p");
    pTag.textContent = `${taskTitle} - Completed on: ${dateTimeString}`;

    // Create a delete button
    let deleteButton = document.createElement("button");

    deleteButton.onclick = function () {
        historyEntry.remove(); // Remove the history entry when clicked
    };

    // Append the message and delete button to the history entry div
    historyEntry.appendChild(pTag);
    historyEntry.appendChild(deleteButton);

    // Append the history entry div to the history section
    document.getElementById("history").appendChild(historyEntry);

    // Check if btn-6 was clicked and all other buttons are disabled
    if (button.id === 'btn6') {
        checkAllButtonsDisabled();
    }
}

// Function to check if all buttons except btn-6 are disabled and show the congratulatory alert
function checkAllButtonsDisabled() {
    // Get all the buttons except btn-6
    const buttons = document.querySelectorAll('.btns');
    const otherButtonsDisabled = Array.from(buttons).every(button => {
        return button.disabled || button.id === 'btn6'; // Ignore btn-6 itself
    });

    // If all buttons except btn-6 are disabled, show the congratulatory alert
    if (otherButtonsDisabled) {
        alert("Board complete, congratulations!");
    }
}

// Clear all history entries when the 'Clear history' button is clicked
function clearHistory() {
    document.getElementById("history").innerHTML = "";
}

// Create a new Date object to get the current date
const currentDate = new Date();

// Format the date to "Sunday, Jul 28 2025"
const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

// Display the formatted date in the h1 tag
document.getElementById('date-display').textContent = formattedDate;
