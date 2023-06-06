let btn1 = document.querySelector('.btn-1');
let list1 = document.querySelector('.list-1');
let btn2 = document.querySelector('.btn-2');
let list2 = document.querySelector('.list-2');
let btn3 = document.querySelector('.btn-3');
let list3 = document.querySelector('.list-3');
let btn4 = document.querySelector('.btn-4');
let list4 = document.querySelector('.list-4');
let btn5 = document.querySelector('.btn-5');
let list5 = document.querySelector('.list-5');


btn1.addEventListener('click',
  function () {
    btn1.classList.toggle('btn--active');
    btn2.classList.remove('btn--active');
    list2.classList.remove('lower__drop-list--active');
    btn3.classList.remove('btn--active');
    list3.classList.remove('lower__drop-list--active');
    btn4.classList.remove('btn--active');
    list4.classList.remove('lower__drop-list--active');
    btn5.classList.remove('btn--active');
    list5.classList.remove('lower__drop-list--active');
    if (btn1.classList.contains('btn--active')) {
      list1.classList.add('lower__drop-list--active'),
        btn1.setAttribute('aria-label', 'Закрыть список реализм')
    } else {
      list1.classList.remove('lower__drop-list--active'),
        btn1.setAttribute('aria-label', 'Открыть список реализм')
    }
  })


btn2.addEventListener('click',
  function () {
    btn1.classList.remove('btn--active');
    list1.classList.remove('lower__drop-list--active');
    btn2.classList.toggle('btn--active');
    btn3.classList.remove('btn--active');
    list3.classList.remove('lower__drop-list--active');
    btn4.classList.remove('btn--active');
    list4.classList.remove('lower__drop-list--active');
    btn5.classList.remove('btn--active');
    list5.classList.remove('lower__drop-list--active');
    if (btn2.classList.contains('btn--active')) {
      list2.classList.add('lower__drop-list--active'),
        btn2.setAttribute('aria-label', 'Закрыть список импрессионизм')
    } else {
      list2.classList.remove('lower__drop-list--active'),
        btn2.setAttribute('aria-label', 'Открыть список ипрессионизм')
    }
  })


btn3.addEventListener('click',
  function () {
    btn1.classList.remove('btn--active');
    list1.classList.remove('lower__drop-list--active');
    btn2.classList.remove('btn--active');
    list2.classList.remove('lower__drop-list--active');
    btn3.classList.toggle('btn--active');
    btn4.classList.remove('btn--active');
    list4.classList.remove('lower__drop-list--active');
    btn5.classList.remove('btn--active');
    list5.classList.remove('lower__drop-list--active');
    if (btn3.classList.contains('btn--active')) {
      list3.classList.add('lower__drop-list--active'),
        btn3.setAttribute('aria-label', 'Закрыть список постимпрессионизм')
    } else {
      list3.classList.remove('lower__drop-list--active'),
        btn3.setAttribute('aria-label', 'Открыть список постимпрессионизм')
    }
  })

btn4.addEventListener('click',
  function () {
    btn1.classList.remove('btn--active');
    list1.classList.remove('lower__drop-list--active');
    btn2.classList.remove('btn--active');
    list2.classList.remove('lower__drop-list--active');
    btn3.classList.remove('btn--active');
    list3.classList.remove('lower__drop-list--active');
    btn4.classList.toggle('btn--active');
    btn5.classList.remove('btn--active');
    list5.classList.remove('lower__drop-list--active');
    if (btn4.classList.contains('btn--active')) {
      list4.classList.add('lower__drop-list--active'),
        btn4.setAttribute('aria-label', 'Закрыть список авангард')
    } else {
      list4.classList.remove('lower__drop-list--active'),
        btn4.setAttribute('aria-label', 'Открыть список авангард')
    }
  })


btn5.addEventListener('click',
  function () {
    btn1.classList.remove('btn--active');
    list1.classList.remove('lower__drop-list--active');
    btn2.classList.remove('btn--active');
    list2.classList.remove('lower__drop-list--active');
    btn3.classList.remove('btn--active');
    list3.classList.remove('lower__drop-list--active');
    btn4.classList.remove('btn--active');
    list4.classList.remove('lower__drop-list--active');
    btn5.classList.toggle('btn--active');
    if (btn5.classList.contains('btn--active')) {
      list5.classList.add('lower__drop-list--active'),
        btn5.setAttribute('aria-label', 'Закрыть список футуризм')
    } else {
      list5.classList.remove('lower__drop-list--active'),
        btn5.setAttribute('aria-label', 'Открыть список футуризм')
    }
  })


new SimpleBar(document.getElementById('myEl'), {
  autoHide: false,
  scrollbarMaxSize: 28
});
new SimpleBar(document.getElementById('myEl1'), {
  autoHide: false,
  scrollbarMaxSize: 28
});
new SimpleBar(document.getElementById('myEl2'), {
  autoHide: false,
  scrollbarMaxSize: 28
});
new SimpleBar(document.getElementById('myEl3'), {
  autoHide: false,
  scrollbarMaxSize: 28
});
new SimpleBar(document.getElementById('myEl4'), {
  autoHide: false,
  scrollbarMaxSize: 28
});

const element = document.querySelector('.select');
const choices = new Choices(element, {
  searchEnabled: false,
});

const slider1 = document.querySelector('.swiper-container1');
const slider2 = document.querySelector('.swiper-container2');
const slider3 = document.querySelector('.swiper-container3');
let mySwiper1 = new Swiper(slider1, {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },


  pagination: {
    el: '.pag-1',
    type: 'fraction',
    clickable: true,
    slideToClickedSlide: true,
  },
  //   autoplay: {
  //     delay: 5000,
  //   },
  loop: false,
  navigation: {
    nextEl: '.button-next1',
    prevEl: '.button-prev1',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 45
    },
    1200: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 45
    },
    // when window width is >= 480px
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    },
  }
})
let mySwiper2 = new Swiper(slider2, {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },

  loop: false,
  navigation: {
    nextEl: '.button-next2',
    prevEl: '.button-prev2',
  },
  pagination: {
    el: '.pag-2',
    type: 'bullets',
    clickable: true,
    slideToClickedSlide: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    609: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 25,
    },


    // when window width is >= 480px
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 40,
    },

    // when window width is >= 640px

  }
})


let mySwiper3 = new Swiper(slider3, {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },

  loop: false,
  navigation: {
    nextEl: '.button-next3',
    prevEl: '.button-prev3',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30
    },
    // when window width is >= 480px
    660: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 40
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50
    },
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 57
    }
  }
})

let tabsBtn = document.querySelectorAll('.list-2__btns');
let tabsItem = document.querySelectorAll('.big-block__item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('list-2__btns--active') });
    e.currentTarget.classList.add('list-2__btns--active');

    tabsItem.forEach(function (element) { element.classList.remove('big-block__item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('big-block__item--active');
  });
});

new Accordion('.accordion', {
  openOnInit: [0],
});

let phone = document.querySelector("input[type='tel']")
var im = new Inputmask("+7 (999) 999-99-99")
im.mask(phone);
new window.JustValidate('.contacts__form', {
  colorWrong: '#d11616',
  rules: {
    name: {
      required: true
    },
    phone: {
      required: true,
      function: (name, value) => {
        const ph = phone.inputmask.unmaskedvalue();
        return Number(ph) && ph.length === 10;
      }
    },
  },
  messages: {
    name: "Вы не ввели имя",
    phone: {
      required: "Вы не ввели телефон",
      function: "Недостаточное количество символов"
    }
  }
});

ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.758468, 37.601088],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 12,
    controls: ["geolocationControl", "zoomControl"]
  });

  myMap.behaviors.disable('scrollZoom');

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: "default#image",
    iconImageHref: "../img/marker.svg",
    iconImageSize: [20, 20],

  });

  myMap.geoObjects.add(myPlacemark);
}

let burger = document.querySelector(".burger");
let menu = document.querySelector(".upper__nav");
let menuLinks = menu.querySelectorAll(".nav__link")

burger.addEventListener('click',
  function () {
    burger.classList.toggle("burger--active");
    if (burger.classList.contains("burger--active")) {
      burger.setAttribute('aria-label', 'Закрыть меню')
    } else {
      burger.setAttribute('aria-label', 'Открыть меню')
    }
    menu.classList.toggle("upper__nav--active");
    document.body.classList.toggle("stop-scroll");
  })

menuLinks.forEach(function (elem) {
  elem.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    menu.classList.remove("upper__nav--active");
    document.body.classList.remove("stop-scroll");
  })
})

let searchBtn = document.querySelector('.search-btn');
let upperSearch = document.querySelector('.upper__form-submit');

searchBtn.addEventListener('click', function () {
  searchBtn.classList.toggle('search-btn--active');
  upperSearch.classList.toggle('upper__form-submit--active');
});

