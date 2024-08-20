// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle visibility of additional content in the About Me section
document.getElementById('toggleContentButton').addEventListener('click', function() {
    const content = document.getElementById('additionalContent');
    content.classList.toggle('hidden');
});
