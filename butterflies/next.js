// Wait for page to load fully
window.addEventListener("load", () => {
  const btn = document.getElementById("nextBtn");

  // show button after 3 seconds
  setTimeout(() => {
    btn.classList.add("show");
  }, 3000);

  // on click → next page
  btn.addEventListener("click", () => {
    console.log("Button clicked!");
    window.location.href = "../dist/index.html"; // change if needed
  });
});
