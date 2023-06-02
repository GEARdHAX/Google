function searchGoogle(event) {
 event.preventDefault(); // Prevents the form from being submitted normally

 const searchInput = document.querySelector(".search-input");
 const searchQuery = searchInput.value.trim();

 if (searchQuery) {
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
   searchQuery
  )}`;
  window.open(searchUrl, "_blank");
 }
}

const image = document.getElementById("profile-pic");
const popup = document.getElementsByClassName("pop-up")[0];
const label = document.getElementsByTagName("label")[0];
image.addEventListener("click", function () {
 popup.style.display = "none";
 if (label.style.visibility == "visible") {
  label.style.visibility = "hidden";
 } else label.style.visibility = "visible";
});
document.body
 .getElementsByClassName("box")[0]
 .addEventListener("click", function () {
  label.style.visibility = "hidden";
 });
const input = document.querySelector("input");
input.addEventListener("change", () => {
 image.src = URL.createObjectURL(input.files[0]);
});
