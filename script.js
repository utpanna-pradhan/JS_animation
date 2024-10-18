const cards = document.querySelectorAll('.card');
    
        
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('animate__rotateIn');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('animate__rotateIn');
    });
});