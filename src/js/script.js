//Navbar Transition
const nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Change 50 to your desired scroll threshold
        nav.classList.add('navbar-black');
    } else {
        nav.classList.remove('navbar-black');
    }
});
