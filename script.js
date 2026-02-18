const menuButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const form = document.querySelector('.contact-form');
const formMessage = document.getElementById('form-message');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

menuButton?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Thanks! Your inquiry has been received. We will contact you shortly.';
  form.reset();
});
