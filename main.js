// Menu toggle for mobile
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('menuToggle');
  const nav = document.getElementById('navLinks');
  if(btn && nav){
    btn.addEventListener('click', ()=> nav.classList.toggle('show'));
  }

  // Simple contact form handler (local only)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const result = document.getElementById('formResult');
      result.textContent = 'Enviado com sucesso — obrigado! (simulação local)';
      form.reset();
    });
  }
});
