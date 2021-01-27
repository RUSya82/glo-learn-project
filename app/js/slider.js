import $ from 'jquery';
import 'slick-carousel';


$('.features__slider').slick({
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // appendArrows: $('.features__icon'),
    draggable: true	,	//можно ли перетаскивать слайдер мышкой ( для ПК)
    swipe: true,			//можно ли перелистывать на смартфонах
    touchTrashHold: 1,      //сколько нужно просвайпить на мобилке, чтобы слайер прокрутился
    touchMove: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                prevArrow: '<button class="prev arrow"></button>',
                nextArrow: '<button class="next arrow"></button>',
            }
        },
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: '<button class="prev arrow"></button>',
                nextArrow: '<button class="next arrow"></button>',
                // centerMode: true,
                centerPadding: '60px',
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<button class="prev arrow"></button>',
                nextArrow: '<button class="next arrow"></button>',
                // centerMode: true,
                centerPadding: '60px',
            }
        }
    ]
});
let l;
l = document.querySelector('.calc-form__button');





