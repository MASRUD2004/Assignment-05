function handleClick(button) {
    // Handles task completion, updates counters, and adds history entry
    if (!confirm("Task completed")) return;

    button.disabled = true;

    let plusCounter = document.getElementById("completed-task");
    let minusCounter = document.getElementById("minus-counter");

    plusCounter.textContent = parseInt(plusCounter.textContent) + 1;
    minusCounter.textContent = parseInt(minusCounter.textContent) - 1;

    let dateTimeString = new Date().toLocaleString();

    let taskTitle = button.closest(".card-body").querySelector("h2").innerText;

    let historyEntry = document.createElement("div");
    historyEntry.classList.add("history-item", "flex", "justify-between", "items-center", "p-2", "bg-gray-100", "rounded-md", "mt-2");

    let pTag = document.createElement("p");
    pTag.textContent = `${taskTitle} - Completed on: ${dateTimeString}`;

    let deleteButton = document.createElement("button");

    deleteButton.onclick = function () {
        historyEntry.remove();
    };

    historyEntry.appendChild(pTag);
    historyEntry.appendChild(deleteButton);

    document.getElementById("history").appendChild(historyEntry);

    if (button.id === 'btn6') {
        checkAllButtonsDisabled();
    }
}

function checkAllButtonsDisabled() {
    // Checks if all buttons (except btn-6) are disabled and shows a congratulatory message
    const buttons = document.querySelectorAll('.btns');

    const otherButtonsDisabled = Array.from(buttons).every(button => {
        return button.disabled || button.id === 'btn6';
    });

    if (otherButtonsDisabled) {
        alert("Board complete, congratulations!");
    }
}

function clearHistory() {
    // Clears all history entries
    document.getElementById("history").innerHTML = "";
}

const currentDate = new Date();

// Formats and displays the current date
const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

document.getElementById('date-display').textContent = formattedDate;
