// small mobile drawer toggle
(function(){
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if(!menuToggle || !mobileDrawer) return;

  menuToggle.addEventListener('click', function(){
    const shown = mobileDrawer.style.display === 'block';
    mobileDrawer.style.display = shown ? 'none' : 'block';
    mobileDrawer.setAttribute('aria-hidden', shown ? 'true' : 'false');
  });

  // close drawer on outside click
  document.addEventListener('click', (e)=>{
    if(!mobileDrawer) return;
    if(mobileDrawer.style.display !== 'block') return;
    const withinDrawer = mobileDrawer.contains(e.target);
    const clickedToggle = menuToggle.contains(e.target);
    if(!withinDrawer && !clickedToggle){
      mobileDrawer.style.display = 'none';
      mobileDrawer.setAttribute('aria-hidden', 'true');
    }
  });
})();