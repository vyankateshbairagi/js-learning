
let charInput = document.querySelector("#charInput");
let charLabel = document.querySelector("#charLabel");

charInput.addEventListener("input", () => {
  if (charInput.value.length === 0) {
    charLabel.textContent = "Enter Your Character";
  } else {
    let abc = charInput.value.length;
    charLabel.textContent = `You Enter ${abc} Character`;
  }
});



let msgInput = document.querySelector("#msgInput");
let msgLabel = document.querySelector("#msgLabel");

const maxLength = 100;

msgInput.addEventListener("input", () => {
  let length = msgInput.value.length;
  let remaining = maxLength - length;

  if (length === 0) {
    msgLabel.textContent = "Enter Your Message";
  } 
  else if (remaining > 0) {
    msgLabel.textContent = `You remain ${remaining} characters`;
    msgLabel.style.color="black";

  } 
  else {
    msgLabel.textContent = "You have reached the limit!";
    msgLabel.style.color="red";
    alert("Message limit reached!");
  }
});


