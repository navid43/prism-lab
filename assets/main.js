/* No dependencies; hosted easily on GitHub Pages. */
(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const next = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(next));
      menuButton.setAttribute('aria-label', next ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('is-open', next);
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        nav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
      }
    });
  }

  const filters = document.querySelectorAll('[data-filter]');
  const publications = document.querySelectorAll('[data-year]');
  if (filters.length && publications.length) {
    filters.forEach(btn => btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filters.forEach(b => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });
      publications.forEach(item => {
        const year = Number(item.dataset.year);
        item.hidden = !(filter === 'all' || (filter === 'older' ? year < 2025 : String(year) === filter));
      });
    }));
  }
})();
