// JavaScript to handle scroll and hover effects on the navigation menu

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');

    // Change navbar background color on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hover effect for menu items
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            this.style.color = '#FFD700';
        });
        item.addEventListener('mouseout', function () {
            this.style.color = '#fff';
        });
    });
});
