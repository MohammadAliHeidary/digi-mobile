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

function setLocation(e) {
    e.target.classList.remove('flex')
    e.target.classList.add('hidden')
}