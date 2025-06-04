document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const details = document.getElementById('details').value.trim();

  const message = `Hello, I want to order a website.%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ARequirements: ${details}`;

  const whatsappNumber = "9960139858";

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
});
