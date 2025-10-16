// secret.improved.js
(function(){
  // triple-tap anywhere to toggle the secret control panel (for mobile and desktop)
  let taps = 0, last = 0;
  const Tmax = 700; // ms window
  const showSecret = () => {
    let panel = document.getElementById('secret-panel');
    if(!panel){
      panel = document.createElement('div');
      panel.id = 'secret-panel';
      panel.style.position = 'fixed';
      panel.style.right = '16px';
      panel.style.bottom = '16px';
      panel.style.background = 'white';
      panel.style.border = '1px solid rgba(0,0,0,0.08)';
      panel.style.padding = '12px';
      panel.style.borderRadius = '10px';
      panel.style.boxShadow = '0 10px 30px rgba(2,6,23,0.08)';
      panel.innerHTML = '<strong>Mode Rahasia</strong><div style="margin-top:8px"><button id="secret-reset" class="secret-btn">Reset Pion</button> <button id="secret-skip" class="secret-btn">Lewati Giliran</button></div>';
      document.body.appendChild(panel);
      document.getElementById('secret-reset').addEventListener('click', ()=>{ alert('Reset pion: belum diimplementasikan (tambah logic game)') });
      document.getElementById('secret-skip').addEventListener('click', ()=>{ alert('Lewati giliran: belum diimplementasikan (tambah logic game)') });
    } else {
      panel.remove();
    }
  };
  document.addEventListener('click', function(e){
    let now = Date.now();
    if(now - last < Tmax){
      taps++;
    } else {
      taps = 1;
    }
    last = now;
    if(taps>=3){ showSecret(); taps = 0; }
  }, {passive:true});

  // small helper: add spinner to any button with data-loading attr while promise runs
  window.withLoading = async function(btn, promiseFactory){
    if(!btn) return await promiseFactory();
    btn.disabled = true;
    const sp = document.createElement('span'); sp.className='spinner'; sp.style.marginLeft='8px';
    btn.appendChild(sp);
    try{
      return await promiseFactory();
    } finally {
      btn.disabled = false;
      sp.remove();
    }
  }
})();