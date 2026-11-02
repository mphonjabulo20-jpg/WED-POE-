document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('open');
        }
      });
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const nameInput = form.querySelector('input[type="text"]');
      const emailInput = form.querySelector('input[type="email"]');
      const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'friend';
      const email = emailInput && emailInput.value.trim() ? emailInput.value.trim() : '';

      if (email) {
        alert(`Thanks, ${name}! Your message has been sent successfully. (demo)`);
      } else {
        alert(`Thanks, ${name}! (demo)`);
      }

      form.reset();
    });
  });

  document.querySelectorAll('.plan-card .btn-terracotta, .newsletter .btn-terracotta').forEach((button) => {
    button.addEventListener('click', () => {
      const planName = button.closest('.plan-card')
        ? button.closest('.plan-card').querySelector('h3')?.textContent.trim()
        : 'Thank you';

      alert(`${planName} subscription selected! (demo)`);
    });
  });
});
