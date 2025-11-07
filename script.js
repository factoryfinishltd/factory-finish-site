document.addEventListener('DOMContentLoaded', function(){
  // menu toggle (same file used on all pages)
  const menu = document.getElementById('mainNav');
  const toggle = document.getElementById('menuToggle');
  if(toggle && menu){
    toggle.addEventListener('click', () => {
      const isHidden = getComputedStyle(menu).display === 'none';
      menu.style.display = isHidden ? 'flex' : 'none';
    });
  }

  // Set current year in footer
  const years = document.querySelectorAll('#year');
  years.forEach(el => el.textContent = new Date().getFullYear());

  // Simple accessibility: close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menu || !toggle) return;
    const target = e.target;
    if (getComputedStyle(menu).display === 'flex' && !menu.contains(target) && target !== toggle) {
      menu.style.display = 'none';
    }
  });
});
