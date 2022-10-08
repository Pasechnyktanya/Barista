(function () {

    const slides = [
        `<div class="ws__card">
                <div class="ws__card__icon">
                        <img src="img/coma.svg" alt="coma"></div>
                <div class="ws__card__name">JOHN JELLY</div>
                <div class="ws__card__course"><em>Coffee Enthusiast</em></div>
                <div class="ws__content">“I am the kind of person that can sing odes to coffee. At the
                        course, I learned to make the perfect coffee at home, so now I have no reason to leave it at
                        all. I can't even count how much money I’m saving on coffee-to-go every day!”</div>
                <div class="ws__data">December 15, 2021</div>
            </div>`,
        `<div class="ws__card">
                    <div class="ws__card__icon">
                        <img src="img/coma.svg" alt="coma"></div>
                    <div class="ws__card__name">MARY WOLLEN</div>
                    <div class="ws__card__course"><em>Barista</em></div>
                    <div class="ws__content">“I was so happy to study at CoffeeLab. They know how to work
                        with
                        poor learners and find the best approach to them. Sure, I still have many tricks to learn,
                        but
                        this school gave me basic skills that I use every day at work.”</div>
                    <div class="ws__data">March 15, 2021</div>`,
        `<div class="ws__card">
                    <div class="ws__card__icon">
                        <img src="img/coma.svg" alt="coma"></div>
                    <div class="ws__card__name">LILLY BLUES</div>
                    <div class="ws__card__course"><em>Bar Owner</em></div>
                    <div class="ws__content">“It changed the way I'm doing my business. The courses gave me
                        the
                        management basics for my own coffee bar and the community gave the best baristas. Running my
                        coffee place is now such a pleasure.”</div>
                    <div class="ws__data">November 22, 2021</div>
                </div>`
    ];

    let slideIdx = 0;
    const slideContainer = document.querySelector(".say__carousel .slide__container");

    function showCurrentSlide() {

        slideContainer.innerHTML = slides[slideIdx];
        if (window.innerWidth > 900) {
            const secondSlide = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
            slideContainer.innerHTML += slides[secondSlide];
            
        }

    }
    function prevSlide() {
        slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
        showCurrentSlide();
    }


    function nextSlide() {
        slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
        showCurrentSlide();
    }

    showCurrentSlide();

    const btnPrev = document.querySelector(".say__carousel .btn__prev");
    btnPrev.addEventListener("click", prevSlide);

    const btnNext = document.querySelector(".say__carousel .btn__next");
    btnNext.addEventListener("click", nextSlide);

    window.addEventListener("resize", showCurrentSlide);

})();