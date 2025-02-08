document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    form.reset();
  });
});

function orderNow() {
  alert("Your transport request has been submitted!");
}
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("show");
});
