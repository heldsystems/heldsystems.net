// Show navbar when scrolling past the hero section
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > window.innerHeight * 0.8) {
        navbar.classList.add("show");
    } else {
        navbar.classList.remove("show");
    }
});

// Smooth scrolling when clicking the "Explore" button
document.getElementById("scroll-button").addEventListener("click", function () {
   document.getElementById("bio").scrollIntoView({ behavior: "smooth" });
});

// Scroll animations (fade-in effect when elements enter the viewport)
const sections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach((section) => observer.observe(section));

// Load projects dynamically from projects.json
fetch("projects.json")
    .then((response) => response.json())
    .then((projects) => {
        let container = document.getElementById("project-container");

        projects.forEach((project) => {
            let projectElement = document.createElement("div");
            projectElement.classList.add("project");

            projectElement.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            `;

            container.appendChild(projectElement);
        });
    })
    .catch((error) => console.error("Error loading projects:", error));

// Update copyright year
document.getElementById("year").textContent = new Date().getFullYear();


// Smooth scrolling with accelleration and decelleration
function smoothScrollTo(targetPosition, duration = 800) {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeProgress = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * easeProgress);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// Attach click event to Back to Top button
document.getElementById("back-to-top").addEventListener("click", function () {
    smoothScrollTo(0, 1000); // Adjust duration as needed
});

