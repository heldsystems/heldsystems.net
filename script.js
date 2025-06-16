document.addEventListener('DOMContentLoaded', function() {
    // Automatically insert the current year into the footer
    let yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Fade-Slide Observer for Resume Sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.fade-slide').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`; // staggered delay based on index
        observer.observe(el);
    });

    // Shrinking Header on Scroll
    const header = document.querySelector('.resume-header');

    if (!header) {
        console.error('Header not found!');
        return;
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('small-header');
        } else {
            header.classList.remove('small-header');
        }
    });
});
