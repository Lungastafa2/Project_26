const display = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    // Clear
    if (button.classList.contains("clear")) {
      currentInput = "";
      display.value = 0;
      return;
    }

    // Equals
    if (button.classList.contains("equals")) {
      try {
        currentInput = eval(currentInput);
        display.value = currentInput;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
      return;
    }


    //delete 
    if (button.classList.contains("delete")) {
        
      
        currentInput = currentInput.slice(0, -7);
        display.value = currentInput;
        return;
      }


    // Normal input
    currentInput += value;
    display.value = currentInput;

    
  });
});