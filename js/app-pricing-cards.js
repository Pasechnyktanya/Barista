(function () {

    const products = [
        {

            id: 1,
            name: 'LATTE ART COURSE',
            price: '$150 | 5 days',
            string_1: 'For all coffee fans;',
            string_2: 'Offline lessons only;',
            string_3: 'All materials included;',
            string_4: '8 hours of training;',
            string_5: 'Easy to repeat at home;'


        },
        {
            id: 2,
            name: 'BARISTA LICENSE COURSE',
            price: '$365 | 23 days',
            string_1: 'For beginners;',
            string_2: '50+ hours of training;',
            string_3: 'Classic drinks;',
            string_4: 'Interships included;',
            string_5: 'A certificate is issued;'

        },
        {
            id: 3,
            name: 'ADVANCED BARISTA COURSE',
            price: '$350 | 14 days',
            string_1: 'For proffessionals;',
            string_2: 'Online and offline;',
            string_3: 'Proffessional equipment;',
            string_4: 'Coffee roasting details;',
            string_5: 'Alternative brewing;'

        },
        {
            id: 4,
            name: 'COFFEE LAKE A PRO AT HOME',
            price: '$150 | 5 days',
            string_1: 'For beginners;',
            string_2: 'Classic recipes;',
            string_3: 'Secret tips;',
            string_4: 'Making lush milk foam;',
            string_5: '10 hours of training;'

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
                        alt="checked menu" class="img__checked__menu">${product.string_1}</li>
                <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                        alt="checked menu" class="img__checked__menu">${product.string_2}</li>
                <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                        alt="checked menu" class="img__checked__menu"> ${product.string_3}</li>
                <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                        alt="checked menu" class="img__checked__menu">${product.string_4}</li>
                <li class="cards__list"><img class="img__checked__menu" src="img/checked__menu.svg"
                        alt="checked menu" class="img__checked__menu">${product.string_5}</li>
            </ul>
            <button class="button__pricing">
                Select Course
            </button>
        </article>`;
        }
    }

    renderProducts(products);

})();
