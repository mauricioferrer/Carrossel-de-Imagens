const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

const totalSlides = slides.length;

function showSlide(index) {
    // Remover a classe 'active' de todos os slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Adicionar a classe 'active' ao slide atual
    slides[index].classList.add('active');
    
    // Atualiza o índice do slide atual
    currentSlide = index;
}

// Evento para o botão 'Anterior'
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;  // Garante que o índice nunca seja negativo
    showSlide(currentSlide);
    console.log(currentSlide);
});

// Evento para o botão 'Próximo'
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;  // Garante que o índice volte para o início após o último slide
    showSlide(currentSlide);
    console.log(currentSlide);
});

// Inicializa o carrossel exibindo o primeiro slide (já está com a classe active no HTML)
showSlide(currentSlide);
