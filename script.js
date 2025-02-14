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
  // Якщо cookies не були прийняті або відмовлено від них, показуємо модальне вікно
  if (localStorage.getItem('cookiesAccepted') === null) {
    document.getElementById('cookieModal').style.display = 'flex';
  } else if (localStorage.getItem('cookiesAccepted') === 'false') {
    document.getElementById('cookieModal').style.display = 'flex'; // Відображаємо, якщо була відмова
  }

  // Прийняття cookies
  document.getElementById('acceptCookies').addEventListener('click', function() {
    localStorage.setItem('cookiesAccepted', 'true'); // Зберігаємо інформацію про прийняття
    document.getElementById('cookieModal').style.display = 'none'; // Закриваємо модальне вікно
  });

  // Відмова від cookies
  document.getElementById('declineCookies').addEventListener('click', function() {
    localStorage.setItem('cookiesAccepted', 'false'); // Зберігаємо інформацію про відмову
    document.getElementById('cookieModal').style.display = 'none'; // Закриваємо модальне вікно
  });
};

