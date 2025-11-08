// Minimal menu for mobile
(function(){
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if(menuBtn && mobileMenu){
    menuBtn.addEventListener('click', ()=>{
      const shown = mobileMenu.getAttribute('data-shown') === 'true';
      mobileMenu.style.display = shown ? 'none' : 'block';
      mobileMenu.setAttribute('data-shown', !shown);
    });
  }
  // other menu buttons map to main menu toggle
  ['menuBtn2','menuBtn3','menuBtn4','menuBtn5'].forEach(id=>{
    const b = document.getElementById(id);
    if(b && menuBtn){
      b.addEventListener('click', ()=> menuBtn.click());
    }
  });
  // close mobile menu when clicking outside
  document.addEventListener('click', (e)=>{
    if(!mobileMenu) return;
    if(mobileMenu.getAttribute('data-shown') !== 'true') return;
    if(!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)){
      mobileMenu.style.display = 'none';
      mobileMenu.setAttribute('data-shown', 'false');
    }
  });
})();