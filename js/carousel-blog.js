(function () {


    const slidesBlog = [
        `<div class="blog_card">
                            <div class="blog_image">
                                <img class="img__blog" src="img/blog1 (1).png" alt="img_blog">
                            </div>
                            <div class="info_blog">
                                <p>Coffee trends | May 22, 2022</p>
                                <h2>What's up with flat white?</h2>
                                <p>Remember the time when flat white suddenly appeared in all trendy coffee shops and
                                    became
                                    the
                                    most popular drink? But who orders it now? Almost nobody...</p>
                            </div>
                        </div>`,
        `<div class="blog_card">
                            <div class="blog_image">
                                <img class="img__blog" src="img/img_coffee_blog.png" alt="img_blog">
                            </div>
                            <div class="info_blog">
                                <p>Coffee trends | October 03, 2022</p>
                                <h2>Top winter coffee drinks</h2>
                                <p>A few more weeks, and it will get really cold outside. It's time to put together a
                                    winter
                                    menu and prepare some new hot drinks for your customers with our top recipes...</p>
                            </div>
                        </div>`,
        `<div class="blog_card">
                            <div class="blog_image">
                                <img class="img__blog" src="img/img_coffee_blog1.png" alt="img_blog">
                            </div>
                            <div class="info_blog">
                                <p>Infographics | October 12, 2022</p>
                                <h2>How to please any taste</h2>
                                <p>Coffee lovers have their own preferences. Someone likes strong coffee while someone
                                    adds
                                    a
                                    lot of milk. Someone prefers Arabica, and others love Robusta most of all...</p>
                            </div>
                        </div>`
    ];

    let currentSlides = 0;

    const sliderContainer = document.querySelector(".container__blog .slider-line");

    function renderSlide() {
        sliderContainer.innerHTML = slidesBlog[currentSlides];
        if (window.innerWidth > 700) {
            const secondSlIndex = currentSlides + 1 >= slidesBlog.length ? 0 : currentSlides + 1;
            sliderContainer.innerHTML += slidesBlog[secondSlIndex];
            if (window.innerWidth > 900) {
                const thirdSlideIdx = secondSlIndex + 1 >= slidesBlog.length ? 0 : secondSlIndex + 1;
                sliderContainer.innerHTML += slidesBlog[thirdSlideIdx];
            }

        }
    }

    function prevSlider() {
        currentSlides = currentSlides - 1 < 0 ? slidesBlog.length - 1 : currentSlides - 1;
        renderSlide();
    }

    function nextSlider() {
        currentSlides = currentSlides + 1 >= slidesBlog.length ? 0 : currentSlides + 1;
        renderSlide();
    }
    renderSlide();

    const btnPrevBlog = document.querySelector(".container__blog .btn_blog_prev");
    btnPrevBlog.addEventListener("click", prevSlider);

    const btnNextBlog = document.querySelector(".container__blog .btn_blog_next");
    btnNextBlog.addEventListener("click", nextSlider);

    window.addEventListener("resize", renderSlide);

})();