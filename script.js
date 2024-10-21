// Select elements
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
}
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
var swiper = new Swiper(".product-slider", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Coordinates for each section
const sectionCoordinates = {
    wine: { x: 100, y: 200 },
    health_beauty: { x: 150, y: 250 },
    dairy: { x: 200, y: 300 },
    // Add more sections as needed
};

// Function to show map with arrow
function showMap(productCategory) {
    const modal = document.getElementById('mapModal');
    const arrow = document.getElementById('arrow');

    // Get coordinates for the selected product category
    const coords = sectionCoordinates[productCategory];

    if (coords) {
        arrow.style.left = coords.x + 'px';
        arrow.style.top = coords.y + 'px';
    }

    // Show the modal
    modal.style.display = 'block';
}

// Close modal
document.querySelector('.close').onclick = function () {
    document.getElementById('mapModal').style.display = 'none';
}

// Example usage: Call this function when a product is added
showMap('wine'); // Replace with the relevant category
