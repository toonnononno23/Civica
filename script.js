document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-wrapper');

    carousels.forEach(wrapper => {
        const container = wrapper.querySelector('.carousel-container');
        const prevBtns = wrapper.querySelectorAll('.prev-btn');
        const nextBtns = wrapper.querySelectorAll('.next-btn');

        if (container) {
            prevBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const scrollAmount = container.clientWidth;
                    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                });
            });

            nextBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const scrollAmount = container.clientWidth;
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                });
            });
        }
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));
});