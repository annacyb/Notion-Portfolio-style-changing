// Funkcja do obliczenia wysokości obrazka na podstawie nagłówków
function adjustImageHeight() {
    // Pobranie pierwszych nagłówków h1 i h2 w artykule
    const h1 = document.querySelector('article h1');
    const h2 = document.querySelector('article h2');
    
    // Jeśli nagłówki istnieją, obliczamy ich wysokość
    if (h1 && h2) {
        const h1Height = h1.offsetHeight;
        const h2Height = h2.offsetHeight;
        
        // Ustawienie wysokości obrazka na wysokość obu nagłówków plus padding
        const imageHeight = h1Height + h2Height + 80; // 40px padding top + 40px padding bottom

        // Ustawienie wysokości obrazka
        const image = document.querySelector('.notion-header__cover img');
        if (image) {
            image.style.height = `${imageHeight}px`;
        }
    }
}

// Wywołanie funkcji na załadowanie strony
window.addEventListener('load', adjustImageHeight);

// Ponowne wywołanie funkcji przy zmianie rozmiaru okna
window.addEventListener('resize', adjustImageHeight);
