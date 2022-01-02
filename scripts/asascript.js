document.addEventListener('DOMContentLoaded',()=>{
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 50,
        dist:-80,
        padding:250,
    });
});

