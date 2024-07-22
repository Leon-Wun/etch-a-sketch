const container = document.getElementById("container");
const newGridBtn = document.getElementById("newGridBtn");
const clearButton = document.getElementById("clearButton");

function makeRows(rows, cols) {
  container.innerHTML = ""; // Clear existing grid
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.className = "gridItem";

    cell.addEventListener("mouseenter", function () {
      this.classList.add("hovered-class");
    });

    container.appendChild(cell);
  }
}

function promptNewGrid() {
  let size = prompt(
    "Enter the number of squares per side for the new grid (max 100):"
  );
  size = parseInt(size);
  if (size && size > 0 && size <= 100) {
    makeRows(size, size);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
}

newGridBtn.addEventListener("click", promptNewGrid);

clearButton.addEventListener("click", function () {
  const gridItems = document.querySelectorAll(".gridItem");
  gridItems.forEach((item) => item.classList.remove("hovered-class"));
});

// Initial grid setup
makeRows(16, 16);
