(function() {

    const products = [
        {

            id: 1,
            name: 'LATTE ART COURSE',
            price: '$150 | 5 days'
        
        },
        {
            id: 2,
            name: 'BARISTA LICENSE COURSE',
            price: '$365 | 23 days',

        },
        {
            id: 3,
            name: 'ADVANCED BARISTA COURSE',
            price: '$350 | 14 days',

        },
        {
            id: 4,
            name: 'COFFEE LAKE A PRO AT HOME',
            price: '$150 | 5 days'

        }
    ]


    function renderProducts(products) {
        const productsContainer = document.querySelector('.about__course__container');
        
        for (const product of products) {
            productsContainer.innerHTML += 
           ` <article class="about__course">
            <h4 class="about__course__header">
                ${product.name}
            </h4>
            <span class="about__course__price">
                ${product.price}
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
        </article>`;
        }
    }
    
renderProducts(products);

})();

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

  setInterval(next, 3000);
  showCurrentSlide();


})()
