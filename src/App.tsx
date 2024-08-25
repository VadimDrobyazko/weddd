import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import './App.scss';
// import heart from './images/hearts.png';
import vladana from './images/vladana.png';
import ana from './images/ana.png';
import vlad from './images/vlad.png';
import star from './images/star.png';
import location from './images/kiselevka.png';
import heartTest from './images/heart-test.gif';
import slide1 from './images/slide-1.jpg';
import slide2 from './images/slide-2.jpg';
import slide3 from './images/slide-3.jpg';
import slide4 from './images/slide-4.jpg';
import slide5 from './images/slide-5.jpg';
import slide6 from './images/slide-6.jpg';
import slide7 from './images/slide-7.jpg';
import slide8 from './images/slide-8.jpg';
import slide9 from './images/slide-9.jpg';
import slide11 from './images/slide-11.jpg';
import slide12 from './images/slide-12.jpg';
import slide13 from './images/slide-13.jpg';
import slide14 from './images/slide-14.jpg';
import slide15 from './images/slide-15.jpg';
import slide16 from './images/slide-16.jpg';
import slide17 from './images/slide-17.jpg';
import slide18 from './images/slide-18.jpg';
import slide19 from './images/slide-19.jpg';
import slide20 from './images/slide-20.jpg';
import slide21 from './images/slide-21.jpg';
import slide22 from './images/slide-22.jpg';
import slide23 from './images/slide-23.jpg';
import slide24 from './images/slide-24.jpg';
import carousel1 from './images/carousel-1.png';
import carousel2 from './images/carousel-2.png';
import carousel3 from './images/carousel-3.png';

export const App: React.FC = () => {
  useEffect(() => {
    const headerBlock = document.querySelector('.header__block');

    if (headerBlock) {
      setTimeout(() => {
        headerBlock.classList.add('active');
      }, 100);
    }
  }, []);

  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const handleScroll = () => {
      fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();

        if (rect.top <= window.innerHeight - 100) {
          element.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Проверка при загрузке страницы

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="starter">
      <div className="wrapper">
        <section className="header fade-in">
          <div className="header__image fade-in"></div>

          <div className="header__wrapper fade-in">
            <div className="header__block fade-in">
              <div className="image fade-in">
                <img src={vlad} alt="" />
              </div>

              <div className="image fade-in">
                <img src={ana} alt="" />
              </div>
            </div>

            <div className="header__text fade-in">
              Влад <span>+</span> Аня
            </div>

            <div className="header__minus fade-in">=</div>

            <div className="header__heart fade-in">
              <img src={heartTest} alt="" />
            </div>

            <div className="header__info fade-in">Впізнали цих пупсиків?</div>
            <div className="header__info-title fade-in">
              Так-так, це маленькі ми, які тоді ще не знали, яке майбутнє їм
              підготувало життя❤️
            </div>

            <div className="header__image">
              <img src={vladana} alt="" />
            </div>
          </div>
        </section>

        <section className="main fade-in">
          <div className="main__title fade-in">
            Тепер ми плануємо створити власну сімʼю і хочемо запросити вас
            розділити один із найважливіших днів - наше весілля, яке без вас
            буде не таким теплим і веселим!
          </div>

          <div className="main__date fade-in">28.09.2024</div>

          <div className="main__dresscode fade-in">
            <h2>
              Нам буде приємно, якщо ви підтримаєте кольорову гаму нашого
              весілля:
            </h2>

            <div className="main__dresscode-wrapper fade-in">
              <img src={carousel1} alt="" />
              <img src={carousel2} alt="" />
              <img src={carousel3} alt="" />
            </div>

            <ul className="main__dress">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div className="main__slider-title fade-in">
            Для натхнення по образам і більшого розуміння стилю, ми підготували
            приклади луків, які ви можете переглянути в каруселі нижче:
          </div>

          <div className="main__slider fade-in">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 3000 }}
              style={{ width: '100%', height: 'auto' }}
            >
              <SwiperSlide>
                <img src={slide1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide5} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide6} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide7} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide8} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide9} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide11} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide12} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide13} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide14} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide15} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide16} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide17} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide18} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide19} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide20} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide21} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide22} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide23} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide24} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="main__programm fade-in">
            <div className="main__programm-title">
              <h2>Програма дня</h2>
            </div>

            <div className="main__programm-list">
              <ul className="main__programm-item">
                <li>13 : 30</li>
                <li>
                  <img src={star} alt="" />
                </li>
                <li>
                  Welcome
                  <span>Час пролетить непомітно за ігристим келихом вина</span>
                </li>
              </ul>

              <ul className="main__programm-item">
                <li>14 : 00</li>
                <li>
                  <img src={star} alt="" />
                </li>
                <li>
                  Церемонія
                  <span>
                    Початок одного з найважливіших кроків у нашому житті
                  </span>
                </li>
              </ul>

              <ul className="main__programm-item">
                <li>15 : 00</li>
                <li>
                  <img src={star} alt="" />
                </li>
                <li>
                  Весільний бенкет
                  <span>
                    Наповнюйте свої келихи та налаштовуйтесь на бомбезне свято
                  </span>
                </li>
              </ul>

              <ul className="main__programm-item">
                <li>19 : 00</li>
                <li>
                  <img src={star} alt="" />
                </li>
                <li>
                  Вечірня церемонія
                  <span>
                    Дочекайтесь цього моменту, бо ми підготували дуже солодкий
                    сюрприз для Вас
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="main__location fade-in">
            <div className="main__location-title">Місце проведення</div>

            <div className="main__location-wrapper">
              <img src={location} alt="" />
            </div>

            <div className="main__location-map">
              <a href="https://maps.app.goo.gl/beoE7kCwmBWdkwBv8">
                Подивитись на карті
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
