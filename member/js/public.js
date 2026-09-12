/**
 * STGA Demo - Public site interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const closeMenuBtn = document.getElementById('closeMobileNav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeMenuBtn && mobileNav) {
    closeMenuBtn.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Membership form
  const membershipForm = document.getElementById('membershipForm');
  if (membershipForm) {
    membershipForm.addEventListener('submit', (e) => {
      e.preventDefault();
      openModal('successModal');
      membershipForm.reset();
    });
  }

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Your message has been sent successfully! (Demo)', 'success');
      contactForm.reset();
    });
  }

  // Tabs on opportunities
  initTabs('.opportunities-section');
  initTabs('.gallery-section');

  // Gallery lightbox (simple)
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const caption = item.querySelector('.gallery-caption')?.textContent || 'Gallery Image';
      showToast(`Viewing: ${caption} (Demo lightbox)`, 'info');
    });
  });

  // Opportunity filters (visual only)
  const oppSearch = document.getElementById('oppSearch');
  if (oppSearch) {
    oppSearch.addEventListener('input', () => {
      // Visual demo only
    });
  }

  // File upload visual
  document.querySelectorAll('.file-upload').forEach(el => {
    el.addEventListener('click', () => {
      const input = el.querySelector('input[type="file"]');
      if (input) input.click();
    });
    const input = el.querySelector('input[type="file"]');
    if (input) {
      input.addEventListener('change', () => {
        const name = input.files[0]?.name;
        if (name) {
          const label = el.querySelector('.file-label');
          if (label) label.textContent = name;
        }
      });
    }
  });
});
