// =========================================================
// Student Records – landing page script
// Shows a short "Thanks for downloading!" message when the
// download button is clicked.
// =========================================================

// Find the button and the message element on the page
const downloadButton = document.getElementById("download-btn");
const thanksMessage = document.getElementById("thanks-message");

// Keeps track of the timer so repeated clicks restart it cleanly
let hideTimer;

downloadButton.addEventListener("click", function () {
  // Show the message (the download itself still happens normally)
  thanksMessage.textContent = "Thanks for downloading!";
  thanksMessage.classList.add("show");

  // Hide it again after 4 seconds
  clearTimeout(hideTimer);
  hideTimer = setTimeout(function () {
    thanksMessage.classList.remove("show");
  }, 4000);
});
