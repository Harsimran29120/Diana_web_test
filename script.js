const rover = document.getElementById("rover");
const xInput = document.getElementById("x-coordinate");
const yInput = document.getElementById("y-coordinate");
const moveButton = document.getElementById("move-button");

moveButton.addEventListener("click", () => {
    const x = parseFloat(xInput.value) || 0;
    const y = parseFloat(yInput.value) || 0;

    if (x >= 0 && x <= 100 && y >= 0 && y <= 100) {
        const xPos = (x / 100) * 240; // Adjusted to fit within the Mars field
        const yPos = (y / 100) * 240;

        rover.style.transform = `translate(${xPos}px, ${240 - yPos}px)`;
    }
});
