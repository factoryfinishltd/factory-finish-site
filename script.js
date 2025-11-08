// Simple mobile nav toggle
function wireMenus(){
  const toggles = document.querySelectorAll('.menu-toggle');
  toggles.forEach(btn=>{
    const nav = btn.parentElement.querySelector('.main-nav');
    btn.addEventListener('click', ()=>{
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      if(nav){
        const shown = nav.getAttribute('data-shown') === 'true';
        nav.style.display = shown ? 'none' : 'block';
        nav.setAttribute('data-shown', !shown);
      }
    });
  });
}
document.addEventListener('DOMContentLoaded', wireMenus);