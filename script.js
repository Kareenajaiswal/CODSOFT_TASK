document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typing effect
    const text = "Hello, I'm Kareena Jaiswal";
    let index = 0;
    function type() {
        if (index < text.length) {
            document.querySelector('.typing-effect').textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    type();

    // Carousel control
    let slideIndex = 0;
    showSlides(slideIndex);

    window.changeSlide = function(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        const slides = document.getElementsByClassName('carousel-item');
        if (n >= slides.length) {
            slideIndex = 0;
        }
        if (n < 0) {
            slideIndex = slides.length - 1;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[slideIndex].style.display = 'block';
    }

    // Form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted successfully!');
        form.reset();
    });
});
