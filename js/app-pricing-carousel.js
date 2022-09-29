(function() {

    const slides = [
        `<article class="about__course"><h4 class="about__course__header">
        LATTE ART COURSE
    </h4></article>`,
        `<article class="about__course"><h4 class="about__course__header">
        BARISTA LICENSE COURSE
    </h4></article>`,
        `<article class="about__course"><h4 class="about__course__header">
        ADVANCED BARISTA COURSE
    </h4></article>`,
        `<article class="about__course"><h4 class="about__course__header">
        COFFEE LAKE A PRO AT HOME
    </h4></article>`
    ]

    let slideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.main-products__carousel .slide-container')
        slideContainer.innerHTML = slides[slideIdx]
    }

    function nextSlide() {
        slideIdx = slideIdx + 1 > slides.length ? 0 : slideIdx + 1;
    showCurrentSlide();
  }

  setInterval(nextSlide, 3000);
  showCurrentSlide();


})()
