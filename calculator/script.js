const display = document.getElementById("display");
let currentInput = "";
let resetDisplay = false;

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;

    if (action === "clear") {
      currentInput = "";
      display.textContent = "0";
    } else if (action === "delete") {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || "0";
    } else if (action === "=") {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
        resetDisplay = true;
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }
    } else {
      if (resetDisplay && "0123456789.".includes(action)) {
        currentInput = "";
        resetDisplay = false;
      }
      currentInput += action;
      display.textContent = currentInput;
    }
  });
});
