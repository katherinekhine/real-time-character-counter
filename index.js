const textareaEl = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");

function updateCounter() {
  totalCounter.innerHTML = textareaEl.value.length;
  remainingCounter.innerHTML =
    textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});
updateCounter();
