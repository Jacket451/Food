/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

    document.addEventListener('DOMContentLoaded', () => {
        // Tabs
        const tabs = document.querySelectorAll('.tabheader__item'),
              tabsContent = document.querySelectorAll('.tabcontent'),
              tabsParent = document.querySelector('.tabheader__items');
      
        function hideTabContent() {
          tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
          });
          tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
          });
        }
      
        function showTabContent(i = 0) {
          tabsContent[i].classList.add('show', 'fade');
          tabsContent[i].classList.remove('hide');
          tabs[i].classList.add('tabheader__item_active');
        }
      
        hideTabContent();
        showTabContent();
        tabsParent.addEventListener('click', event => {
          const target = event.target;
      
          if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
              if (target == item) {
                hideTabContent();
                showTabContent(i);
              }
            });
          }
        }); // Timer
      
        const deadline = '2022-06-01';
      
        function getTimeRemaining(endtime) {
          const t = Date.parse(endtime) - Date.parse(new Date()),
                days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor(t / (1000 * 60 * 60) % 24),
                minutes = Math.floor(t / 1000 / 60 % 60),
                seconds = Math.floor(t / 1000 % 60);
          return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
          };
        }
      
        function getZero(num) {
          if (num >= 0 && num < 10) {
            return `0${num}`;
          } else {
            return num;
          }
        }
      
        function setClock(selector, endtime) {
          const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);
          updateClock();
      
          function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
      
            if (t.total <= 0) {
              clearInterval(timeInterval);
            }
          }
        }
      
        setClock('.timer', deadline); // Modal
      
        const modalTrigger = document.querySelectorAll('[data-modal]'),
              modal = document.querySelector('.modal'); //   modalCloseBtn = document.querySelector('[data-close]');
      
        function openModal() {
          modal.classList.add('show');
          modal.classList.remove('hide');
          document.body.style.overflow = 'hidden';
          clearInterval(modalTimerId);
        }
      
        modalTrigger.forEach(btn => {
          // btn.addEventListener('click', () => {
          //     // modal.classList.add('show');
          //     // modal.classList.remove('hide');
          //     // modal.classList.toggle('show');
          //     // document.body.style.overflow = 'hidden';
          // });
          btn.addEventListener('click', openModal);
        });
      
        function closeModal() {
          modal.classList.toggle('show');
          document.body.style.overflow = '';
        } // modalCloseBtn.addEventListener('click', () => {
        //     // modal.classList.add('hide');
        //     // modal.classList.remove('show');
        //     modal.classList.toggle('show');
        //     document.body.style.overflow = '';
        // });
        // Don't repeate your code
        // modalCloseBtn.addEventListener('click', closeModal);
      
      
        modal.addEventListener('click', e => {
          if (e.target === modal || e.target.getAttribute('data-close') == '') {
            // modal.classList.toggle('show');
            // document.body.style.overflow = '';
            closeModal();
          }
        });
        document.addEventListener('keydown', e => {
          if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
          }
        });
        const modalTimerId = setTimeout(openModal, 600000);
      
        function showModalByScroll() {
          if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
          }
        }
      
        window.addEventListener('scroll', showModalByScroll); // Cards
        // const cards = document.querySelector('.menu__field .container');
        // class Sample {
        //     constructor(img, alt, name, description, price) {
        //         this.img = img;
        //         this.alt = alt;
        //         this.name = name;
        //         this.description = description;
        //         this.price = price;
        //         this.transfer = 27;
        //         this.changeToUAH();
        //     }
        //     changeToUAH() {
        //         this.price = this.price * this.transfer;
        //     }
        //     sampleCreate(){
        //         const div = document.createElement('div');
        //         div.classList.add('menu__item');
        //         div.innerHTML= `
        //         <img src="${this.img}" alt="${this.alt}">
        //         <h3 class="menu__item-subtitle">Меню "${this.name}"</h3>
        //         <div class="menu__item-descr">${this.description}</div>
        //         <div class="menu__item-divider"></div>
        //         <div class="menu__item-price">
        //         <div class="menu__item-cost">Цена:</div>
        //         <div class="menu__item-total"><span>${this.price}</span> грн/день</div>`;
        //         cards.appendChild(div);
        //         }
        //     }
        //     new Sample('img/tabs/hamburger.jpg', 
        //     'Великолепное', 
        //     'Описание великолепного меню в ',
        //     'Одно слово: хочу бургер',
        //     564).sampleCreate();
        //     new Sample('img/tabs/elite.jpg', 
        //     'Кавказкое', 
        //     'Специальное предложение от Ашота',
        //     'Хочешь набить желудок - тогда тебе к Ашоту. Ашот плохого не посоветует',
        //     499).sampleCreate();
        //     new Sample('img/tabs/vegy.jpg', 
        //     'Армянское', 
        //     'Ашот вообще с ума сошёл.',
        //     'Вместо мяса готовит салаты...', 
        //     0).sampleCreate();
      
        class MenuCard {
          constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
          }
      
          changeToUAH() {
            this.price = this.price * this.transfer;
          }
      
          render() {
            const element = document.createElement('div');
      
            if (this.classes.length === 0) {
              this.classes = "menu__item";
              element.classList.add(this.classes);
            } else {
              this.classes.forEach(className => element.classList.add(className));
            }
      
            element.innerHTML = `
                      <img src=${this.src} alt=${this.alt}>
                      <h3 class="menu__item-subtitle">${this.title}</h3>
                      <div class="menu__item-descr">${this.descr}</div>
                      <div class="menu__item-divider"></div>
                      <div class="menu__item-price">
                          <div class="menu__item-cost">Цена:</div>
                          <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                      </div>
                  `;
            this.parent.append(element);
          }
      
        }
      
        const getResource = async (url) => {
          const res = await fetch(url);
      
          if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
          }
      
          return await res.json();
        };
        // Современный вариант с JSON1:
        // getResource('http://localhost:3000/menu')
        //   .then(data => {
            // data.forEach(({img, altimg, title, decr, price}) => {
            //   new MenuCard(img, altimg, title, decr, price, '.menu .container').render();
            // });
        //   });
      
        // Современный вариант с JSON2:
        // getResource('http://localhost:3000/menu')
        //   .then(data => createCard(data));
      
        axios.get('http://localhost:3000/menu')
          .then(data => {
            data.data.forEach(({img, altimg, title, decr, price}) => {
              new MenuCard(img, altimg, title, decr, price, '.menu .container').render();
            });
          });
      
        function createCard(data) {
          data.forEach(({img, altimg, title, descr, price}) => {
            const element = document.createElement('div');
      
            element.classList.add('menu__item');
      
            element.innerHTML =`
              <img src=${img} alt=${altimg}>
              <h3 class="menu__item-subtitle">${title}</h3>
              <div class="menu__item-descr">${descr}</div>
              <div class="menu__item-divider"></div>
              <div class="menu__item-price">
                  <div class="menu__item-cost">Цена:</div>
                  <div class="menu__item-total"><span>${price}</span> грн/день</div>
              </div>
          `;
      
          document.querySelector('.menu .container').append(element);
          });
        }
      
        // Старый вариант
        // new MenuCard("img/tabs/vegy.jpg", "vegy", 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 9, ".menu .container").render();
        // new MenuCard("img/tabs/post.jpg", "post", 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 14, ".menu .container").render();
        // new MenuCard("img/tabs/elite.jpg", "elite", 'Меню “Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 21, ".menu .container").render(); // Forms
      
        const forms = document.querySelectorAll('form');
        const message = {
          loading: 'img/form/spinner.svg',
          success: 'Спасибо! Скоро мы с вами свяжемся',
          failure: 'Что-то пошло не так'
        };
        forms.forEach(item => {
          bindPostData(item);
        });
      
        const postData = async (url, data) => {
          const res = await fetch(url, {
            method: "POST",
            headers: {
              'Content-type': 'application/json; charset=utf-8'
            },
            body: data
          });
      
          return await res.json();
        };
        // Во время использования fecth'a JSON server'a - Не забуть ставить async, await
      
        function bindPostData(form) {
          form.addEventListener('submit', e => {
            e.preventDefault();
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                      display: block;
                      margin: 0 auto;
                  `;
            form.insertAdjacentElement('afterend', statusMessage); // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');
            // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            // Если записать multipart/form-data - сервер не получит данные
      
            const formData = new FormData(form);
            // const object = {};
            // formData.forEach(function (value, key) {
            //   object[key] = value;
            // });
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
      
            // const json = JSON.stringify(object);
            // request.send(json);
            //     request.addEventListener('load', () => {
            //         if (request.status === 200) {
            //             console.log(request.response);
            //             showThanksModal(message.success);
            //             form.reset();
            //             statusMessage.remove();
            //         } else {
            //             showThanksModal(message.failure);
            //         }
            //     });
            // });
      
            postData('http://localhost:3000/requests', json)
            .then(data => {
              console.log(data);
              showThanksModal(message.success);
              statusMessage.remove();
            }).catch(() => {
              showThanksModal(message.failure);
            }).finally(() => {
              form.reset();
            });
          });
        }
      
        function showThanksModal(message) {
          const prevModalDialog = document.querySelector('.modal__dialog');
          prevModalDialog.classList.add('hide');
          openModal();
          const thanksModal = document.createElement('div');
          thanksModal.classList.add('modal__dialog');
          thanksModal.innerHTML = `
              <div class="modal__content">
                  <div class="modal__close" data-close>&times;</div>
                  <div class="modal__title">${message}</div>
              </div>
              
              `;
          document.querySelector('.modal').append(thanksModal);
          setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
          }, 4000);
        }
      
        fetch('http://localhost:3000/menu').then(data => data.json()).then(res => console.log(res));
      
      
      // Slider
      // const sliders = document.querySelectorAll('.offer__slide'),
      //       arrowPrev = document.querySelector('.offer__slider-prev'),
      //       arrowNext = document.querySelector('.offer__slider-next'),
      //       counter = document.querySelector('.offer__slider-counter'),
      //       current = document.querySelector('#current'),
      //       total = document.querySelector('#total'),
      //       wrapper = document.querySelector('.offer__slider-wrapper');
      
      // Костыльно-неработующий вариант слайда
      //       total.textContent = addZero(sliders.length);
      //       current.textContent = addZero(1);  
      
      //       sliders.forEach((item, i) => {
      //         if (i !== 0) {
      //             item.classList.add('hide');
      //         } else {
      //             item.classList.add('active');
      //         }
      //     });
      
      //     let i = 0;
      //     arrowPrev.addEventListener('click', function() {
      //       if (i > 0) {
      //         prevSlide(i);
      //         counter.add.textContent = addZero(i);
      //         i--;
      //       } else {
      //         prevSlide(i);
      //         counter.textContent = addZero(sliders.length);
      //         i = sliders.length - 1;
      //       }
      //     });
      
      //     function prevSlide (i) {
      //       sliders[i].classList.remove('show', 'active');
      //       sliders[i].classList.add('hide');
      
      //       if (i > 0) {
      //         sliders[i - 1].classList.remove('hide');
      //         sliders[i - 1].classList.remove('show', 'active');
      //       } else {
      //         sliders[sliders.length - 1].classList.remove('hide');
      //         sliders[sliders.length - 1].classList.add('show', 'active');
      //       }
      //     }
      
      //     arrowNext.addEventListener('click', function() {
      //       if (i < sliders.length - 1) {
      //         nextSlide(i);
      //         counter.textContent = addZero(i = 2);
      //       } else {
      //         nextSlide(i);
      //         i = 0;
      //         counter.textContent.addZero(1);
      //       }
      //     });
      
      //     function nextSlide(i) {
      //       sliders[i].classList.remove('show', 'active');
      //       sliders[i].classList.add('hide');
      
      //       if (i < sliders.length - 1) {
      //           sliders[i + 1].classList.remove('hide');
      //           sliders[i + 1].classList.add('show', 'active');
      //       } else {
      //           sliders[0].classList.remove('hide');
      //           sliders[0].classList.add('show', 'active');
      //       }
      //   }
        // Пересмотреть свой код и выяснить, почему он не работает
        
        const slides = document.querySelectorAll('.offer__slide'),
              slider = document.querySelector('.offer__slide'),
              prev = document.querySelector('.offer__slider-prev'),
              next = document.querySelector('.offer__slider-next'),
              total = document.querySelector('#total'),
              current = document.querySelector('#current'),
              slidesWrapper = document.querySelector('.offer__slider-wrapper'),
              slidesField = document.querySelector('.offer__slider-inner'),
              width = window.getComputedStyle(slidesWrapper).width;
      
        // Сложный вариант слайдера
      
        let slideIndex = 1;
        let offset = 0;
        
        if (slides.length < 10) {
          total.textContent = `0${slides.length}`;
          current.textContent = `0${slideIndex}`;
        } else {
          total.textContent = slides.length;
          current.textContent = slideIndex;
        }
      
        slidesField.style.width = 100 * slides.length + '%';
        slidesField.style.display = 'flex';
        slidesField.style.transition = '0.5s all';
      
        slidesWrapper.style.overflow = 'hidden';
      
        slides.forEach(slide => {
          slide.style.width = width;
        });
        
        slider.style.position = 'relative';
      
        const indicators = document.createElement('ol'),
              dots = [];
      
        indicators.classList.add('carousel-indicators');
        indicators.style.cssText = `
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 15;
          display: flex;
          justify-content: center;
          margin-right: 15%;
          margin-left: 15%;
          list-style: none;
        `;
        slider.append(indicators);
      
        for (let i = 0; i < slides.length; i++) {
          const dot = document.createElement('li');
          dot.setAttribute('data-slide-to', i + 1);
          dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
          `;
          if (i == 0) {
            dot.style.opacity = 1;
          }
          indicators.append(dot);
          dots.push(dot);
        }
      
        next.addEventListener('click', () => {
          if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) { //'500px'
            offset = 0;
          } else {
            offset += +width.slice(0, width.length - 2);
          }
      
          slidesField.style.transform = `translateX(-${offset}px)`;
      
          if (slideIndex == slides.length) {
            slideIndex = 1;
          } else {
            slideIndex++;
          }
      
          if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
          } else {
            current.textContent = slideIndex;
          }
      
          dots.forEach(dot => dot.style.opacity = '.5');
          dots[slideIndex - 1].style.opacity = 1;
        });
      
        prev.addEventListener('click', () => {
          if (offset == 0) { //'500px'
      
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
          } else {
            offset -= +width.slice(0, width.length - 2);
          }
      
          slidesField.style.transform = `translateX(-${offset}px)`;
      
          if (slideIndex == 1) {
            slideIndex = slides.length;
          } else {
            slideIndex--;
          }
      
          if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
          } else {
            current.textContent = slideIndex;
          }
      
          dots.forEach(dot => dot.style.opacity = '.5');
          dots[slideIndex - 1].style.opacity = 1;
        });
      
        dots.forEach(dot => {
          dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
      
            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);
      
            slidesField.style.transform = `translateX(-${offset}px)`;
      
            if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
          } else {
            current.textContent = slideIndex;
          }
      
            dots.forEach(dot => dot.style.opacity = '.5');
            dots[slideIndex - 1].style.opacity = 1;
          });
        });
      
      // Простой вариант слайдера
      //   showSlides(slideIndex);
      
      //   if (slides.length < 10) {
      //     total.textContent = `0${slides.length}`;
      //   } else {
      //     total.textContent = slides.length;
      //   }
      
      //   function showSlides(n) {
      //     if (n > slides.length) {
      //       slideIndex = 1;
      //     }
      
      //     if (n < 1) {
      //       slideIndex = slides.length;
      //     }
      
      //     slides.forEach(item => item.style.display = 'none');
      
      //     slides[slideIndex - 1].style.display = 'block';
      
      //     if (slides.length < 10) {
      //       current.textContent = `0${slideIndex}`;
      //     } else {
      //       current.textContent = {slideIndex};
      //     }
      //   }
      
      //   function plusSlides(n) {
      //     showSlides(slideIndex += n);
      //   }
      
      //   prev.addEventListener('click', () => {
      //     plusSlides(-1);
      //   });
      
      //   next.addEventListener('click', () => {
      //     plusSlides(+1);
      //   });
      
      
      
      
      });
      })
      
      /******/ });
      //# sourceMappingURL=script.js.map