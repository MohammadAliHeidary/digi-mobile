// <!-- Initialize Swiper -->
var swiper = new Swiper(".top-slider", {
    pagination: {
        el: ".top-slider-pagination",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});

function backToTop() {
    window.scrollTo({
        top: '0',
        left: '0',
        behavior: 'smooth'
    });
}

// remove

function hidd(e) {
    e.target.classList.remove('flex')
    e.target.classList.add('hidden')
}


// window.onload = () => window.scrollTo({
//     top: document.documentElement.scrollHeight,
//     left: '0',
//     behavior: 'smooth'
// });