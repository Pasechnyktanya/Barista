(function() {

       const slides = [
        `<article class="about__course">
    <h4 class="about__course__header">
        LATTE ART COURSE
    </h4>
    <span class="about__course__price">
        $150 | 5 days
    </span>
    <ul class="list__about__course">
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> For all coffee fans;</li>
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> Offline lessons only;</li>
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> All materials included;</li>
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> 8 hours of training;</li>
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> Easy to repeat at home;</li>
    </ul>
    <button class="button__pricing">
        Select Course
    </button>
</article>`,

`<article class="about__course">
    <h4 class="about__course__header">
        BARISTA LICENSE COURSE
    </h4>
    <span class="about__course__price">
        $365 | 23 days
    </span>
    <ul class="list__about__course">
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> For beginners;</li>
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> 50+ hours of training;</li>
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> Classic drinks;</li>
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> Interships included;</li>
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> A certificate is issued;
        </li>
    </ul>
    <button class="button__pricing">
        Select Course
    </button>
</article>`,

`<article class="about__course">
    <h4 class="about__course__header">
        ADVANCED BARISTA COURSE
    </h4>
    <span class="about__course__price">
        $350 | 14 days
    </span>
    <ul class="list__about__course">
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> For proffessionals;</li>
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> Online and offline;</li>
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> Proffessional equipment;
        </li>
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> Coffee roasting details;
        </li>
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> Alternative brewing;</li>
    </ul>
    <button class="button__pricing">
        Select Course
    </button>
</article>`,

`<article class="about__course">
    <h4 class="about__course__header">
        COFFEE LAKE A PRO AT HOME
    </h4>
    <span class="about__course__price">
        $150 | 5 days
    </span>
    <ul class="list__about__course">
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> For beginners;</li>
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> Classic recipes;</li>
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> Secret tips;</li>
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> Making lush milk foam;</li>
        <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                alt="checked menu" class="img__checked__menu"> 10 hours of training;</li>
    </ul>
    <button class="button__pricing">
        Select Course
    </button>
</article>`,

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
