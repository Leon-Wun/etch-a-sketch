const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;
    cell.className = "gridItem";

    // Add event listeners to each cell
    cell.addEventListener("mouseenter", function () {
      this.classList.add("hovered-class");
    });

    container.appendChild(cell);
  }
}

makeRows(16, 16);

// Modify the clear button event listener
const clearButton = document.getElementById("clearButton"); // Make sure you have this button in your HTML
clearButton.addEventListener("click", function () {
  const gridItems = document.querySelectorAll(".gridItem");
  gridItems.forEach((item) => item.classList.remove("hovered-class"));
});
