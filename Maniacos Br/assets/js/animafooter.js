 const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.start');
  
      if (entry.isIntersecting) {
        square.classList.add('animacao');
        return; 
      }
    });
  });
  observer2.observe(document.querySelector('.alvo_animacao5'));
  observer2.observe(document.querySelector('.alvo_animacao6'));
  observer2.observe(document.querySelector('.alvo_animacao7'));
  observer2.observe(document.querySelector('.alvo_animacao8'));