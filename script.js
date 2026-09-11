// Highlights today's row in the opening-hours table.
// A small, useful example of reading the real world (the date)
// and updating the DOM to match — rather than animation for its own sake.

document.addEventListener('DOMContentLoaded', () => {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = dayNames[new Date().getDay()];

  const rows = document.querySelectorAll('.hours-table tbody tr');
  rows.forEach((row) => {
    const label = row.querySelector('th').textContent.trim();
    if (label === today) {
      row.classList.add('is-today');
    }
  });
  // Fade in each category card as it scrolls into view
  const bins = document.querySelectorAll('.bin');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  bins.forEach((bin) => observer.observe(bin));
});
