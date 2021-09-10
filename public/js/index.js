
for (let index = 0; index < products.length; index++) {
    const item = products[index];
    let template = `
        <a href="/san-pham?name=${item.nameEng}&pid=${item.id}" title="${item.name}">
            <div class="item d-flex justify-content-center align-items-center">
                <div class="product-item">
                    <img class="lazy" style="max-width: 250px;max-height: 300px" loading="lazy"
                        src="${item.thumbnail}" alt="">
                    <p class="product-item__text">${item.name}</p>
                </div>
            </div>
        </a>
    `
    $("#list-product").append(template)
}


$(document).ready(function () {

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 5,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1199: {
                items: 3
            },
            1400: {
                items: 5
            },

        }
    });

});
