// Tela de abertura

setTimeout(function(){ 
  var msg = document.getElementsByClassName("bg_abertura");
  while(msg.length > 0){
      msg[0].parentNode.removeChild(msg[0]);
  }
  
}, 4000);




// animações de entrada por classe

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.start');
  
      if (entry.isIntersecting) {
        square.classList.add('animacao');
        return; 
      }
    });
  });
  // Membros da banda
  observer.observe(document.querySelector('.alvo_animacao'));

  // Equipamentos
  
  observer.observe(document.querySelector('.alvo_animacao2'));

// Rider de Palco
  
  observer.observe(document.querySelector('.alvo_animacao3'));

// formulario
 
  observer.observe(document.querySelector('.alvo_animacao4'));

  // animacao dos titulos
  observer.observe(document.querySelector('.anime_membros'));
  observer.observe(document.querySelector('.anime_equipo'));
  observer.observe(document.querySelector('.anime_insta'));
  observer.observe(document.querySelector('.anime_rider'));
  observer.observe(document.querySelector('.anime_repert'));
  observer.observe(document.querySelector('.anime_spotify'));
  observer.observe(document.querySelector('.anime_contato'));

 



