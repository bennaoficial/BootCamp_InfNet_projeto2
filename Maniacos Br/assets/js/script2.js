const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelector('.start');
  
      if (entry.isIntersecting) {
        square.classList.add('animacao');
        return; 
      }
    });
  });
  observer3.observe(document.querySelector('.alvo_animacao'));
  observer3.observe(document.querySelector('.alvo_animacao2'));
  // scrips das outras paginas paralelas
