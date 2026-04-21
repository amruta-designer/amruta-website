// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Show / hide older experience roles
const showMoreBtn  = document.getElementById('show-more-btn');
const hiddenRoles  = document.getElementById('hidden-roles');

if (showMoreBtn && hiddenRoles) {
  showMoreBtn.addEventListener('click', () => {
    const isOpen = hiddenRoles.classList.toggle('visible');
    showMoreBtn.textContent = isOpen ? 'Show less' : 'Show more experience';
  });
}

// Contact form — Formspree via fetch (no page reload)
const form       = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    formStatus.className = 'form-status';
    formStatus.textContent = '';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Message sent! I\'ll get back to you soon.';
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      formStatus.className = 'form-status error';
      formStatus.textContent = 'Something went wrong. Please email me directly at amruta.sp@gmail.com';
    }
  });
}
