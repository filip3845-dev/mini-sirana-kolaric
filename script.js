// Glatko scrollanje za navigacijske linkove
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Kontakt formular slanje
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Dohvati podatke iz forme
        const formData = new FormData(this);
        
        // Jednostavna validacija
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        if (name && email && message) {
            // Prikaži potvrdu
            alert('Hvala na poruci! Uskoro ćemo vas kontaktirati.');
            this.reset();
        } else {
            alert('Molimo ispunite sva obavezna polja.');
        }
    });
}

// Animacija pri scrollanju
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Primijeni animaciju na proizvode
document.querySelectorAll('.product-card, .feature, .info-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Poruka u konzolu
console.log('Mini Sirana Kolarić - Web stranica je učitana!');