// enter to search
const inputField = document.querySelector(".search input");
inputField.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    // Simulate clicking the search button
    document.querySelector(".search button").click();
  }
});