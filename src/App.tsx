import React, { useEffect } from 'react';
import './App.scss';
// import heart from './images/hearts.png';
import vladana from './images/vladana.png';
import ana from './images/ana.png';
import vlad from './images/vlad.png';
import star from './images/star.png';
import location from './images/kiselevka.png';
import heartTest from './images/heart-test.gif';

export const App: React.FC = () => {
  useEffect(() => {
    const headerBlock = document.querySelector('.header__block');

    if (headerBlock) {
      setTimeout(() => {
        headerBlock.classList.add('active');
      }, 100);
    }
  }, []);

  return (
    <div className="starter">
      <div className="wrapper">
        <section className="header">
          <div className="header__image"></div>

          <div className="header__wrapper">
            <div className="header__block">
              <div className="image">
                <img src={vlad} alt="" />
              </div>

              <div className="image">
                <img src={ana} alt="" />
              </div>
            </div>

            <div className="header__text">
              Влад <span>+</span> Аня
            </div>

            <div className="header__minus">=</div>

            <div className="header__heart">
              <img src={heartTest} alt="" />
            </div>

            <div className="header__info">Впізнали цих пупсиків?</div>
            <div className="header__info-title">
              Так-так, це маленькі ми, які тоді ще не знали, яке майбутнє їм
              підготувало життя❤️
            </div>

            <div className="header__image">
              <img src={vladana} alt="" />
            </div>
          </div>
        </section>

        <section className="main">
          <div className="main__title">
            Тепер ми плануємо створити власну сімʼю і хочемо запросити вас
            розділити один із найважливіших днів - наше весілля, яке без вас
            буде не таким теплим і веселим!
          </div>

          <div className="main__date">28.09.2024</div>

          <div className="main__dresscode">
            <h2>
              Нам буде приємно, якщо ви підтримаєте кольорову гаму нашого
              весілля
            </h2>

            <ul className="main__dress">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div className="main__programm">
            <div className="main__programm-title">
              <h2>Программа дня</h2>
            </div>

            <div className="main__programm-list">
              <ul className="main__programm-item">
                <li>14 : 00</li>
                <li>
                  <img src={star} alt="" />
                </li>
                <li>
                  Welcome
                  <span>Час пролетить непомітно за ігристим келихом вина</span>
                </li>
              </ul>

              <ul className="main__programm-item">
                <li>14 : 30</li>
                <li>
                  <img src={star} alt="" />
                </li>
                <li>
                  Царемонія
                  <span>Час пролетить непомітно за ігристим келихом вина</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="main__location">
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
