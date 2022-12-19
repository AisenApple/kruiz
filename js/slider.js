const slider = $('.beats').bxSlider({
    pager: false,
    controls: false
});

$('.shop__arrow--prev').click(e => {
    e.preventDefault();

    slider.goToPrevSlide();
})

$('.shop__arrow--next').click(e => {
    e.preventDefault();

    slider.goToNextSlide();
})