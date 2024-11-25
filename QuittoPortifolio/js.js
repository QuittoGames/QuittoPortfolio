// Botão "Voltar ao Topo"
const scrollTopBtn = document.createElement('button');
scrollTopBtn.classList.add('scroll-top', 'fade-in');
scrollTopBtn.innerHTML = '↑';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Mostrar botão apenas ao rolar
window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
});
