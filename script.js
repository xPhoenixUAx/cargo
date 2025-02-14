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
// Покажемо модальне вікно, якщо cookie ще не прийняті
window.onload = function() {
  if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookieModal').style.display = 'flex';
  }

  // Прийняття cookie
  document.getElementById('acceptCookies').addEventListener('click', function() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookieModal').style.display = 'none';
  });
};
