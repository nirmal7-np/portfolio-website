// Smooth Scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle
document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector("nav ul").classList.toggle("active");
});

// Form submission handler
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page refresh

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (name && email && message) {
        alert("Thank you for reaching out, " + name + "! Your message has been sent.");
        document.getElementById("contact-form").reset(); // Reset form
    } else {
        alert("Please fill out all fields.");
    }
});

// Function to toggle between Light and Dark modes
const toggleButton = document.getElementById("mode-toggle");

toggleButton.addEventListener("click", () => {
  // Toggle dark mode class on body and other elements
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");

  const header = document.querySelector("header");
  header.classList.toggle("dark-mode");
  header.classList.toggle("light-mode");

  const footer = document.querySelector("footer");
  footer.classList.toggle("dark-mode");
  footer.classList.toggle("light-mode");

  const form = document.querySelector("form");
  form.classList.toggle("dark-mode");
  form.classList.toggle("light-mode");

  const socialLinks = document.querySelector(".social-links");
  socialLinks.classList.toggle("dark-mode");
  socialLinks.classList.toggle("light-mode");

  const toggleIcon = document.querySelector("#mode-toggle");
  toggleIcon.textContent = document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
});



// Scroll to Top Button
const scrollToTopButton = document.createElement('div');
scrollToTopButton.id = 'scrollToTop';
scrollToTopButton.innerText = '↑';
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// AOS (Animate on Scroll) initialization
AOS.init({
  duration: 1000, // Animation duration
  offset: 200, // Offset when the animation should start
  once: true, // Whether animation should happen only once
});

// Section Fade-In Animation
const sections = document.querySelectorAll('section');

const inView = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.top <= window.innerHeight;
};

const handleScroll = () => {
  sections.forEach((section) => {
    if (inView(section)) {
      section.style.animation = 'fadeIn 1s forwards';
    }
  });
};

window.addEventListener('scroll', handleScroll);
handleScroll(); // Initial check on page load
