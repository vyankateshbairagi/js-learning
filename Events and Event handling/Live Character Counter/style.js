let input = document.querySelector("input");
let label = document.querySelector("label");

input.addEventListener("input", () => {
  if (input.value.length === 0) {
    label.textContent = "Enter Your Character";
  } else {
    label.textContent = `You Enter ${input.value.length} Character`;
  }
});

