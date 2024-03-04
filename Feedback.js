const form = document.getElementById("feedback-form");
const ratingInputs = form.querySelectorAll('input[type="radio"]');

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  // get form data
  const formData = new FormData(form);
  
  // format form data into object
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  
  // send form data to server
  sendFeedback(data);
});

// add event listeners to rating inputs to update star styles
ratingInputs.forEach(function(input) {
  input.addEventListener("change", function() {
    ratingInputs.forEach(function(ratingInput) {
      if (ratingInput.checked) {
        ratingInput.parentNode.querySelector(".star").classList.add("checked");
      } else {
        ratingInput.parentNode.querySelector(".star").classList.remove("checked");
      }
    });
  });
});

// function to send feedback to server
function sendFeedback(data) {
  console.log("Sending feedback data:", data);
  // replace with code to send feedback data to server
}