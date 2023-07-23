const divContent = document.querySelector(".js-container");
const contentDiv = document.querySelector("#js-container");
const priceContent = document.querySelector(".js-price__container");
const contentPrice = document.querySelector("#js-price__container");

let widthScreen = window.screen.width;
let innerWidthScreen = window.innerWidth;

const markup = `<ul class="js-tours__list">
        <li class="js-tous__item">
         <p class="tours-item__text">Departure from Lviv (07:00) / Stryi (08:00)</p>
        </li>
        <li class="js-tous__item">
        <p class="tours-item__text">Pylypets (overview of Shipit waterfall and lunch)</p>
        </li>
        <li class="js-tous__item">
        <p class="tours-item__text">Synevyr Pass (photographing and viewing of Carpathian panoramas)</p>
        </li>
        <li class="js-tous__item">
        <p class="tours-item__text">"Synevyr" National Park (brown bear rehabilitation center and
          transition to the lake)</p>
        </li>
        <li class="js-tous__item"><p class="tours-item__text">Stryi (21:00)/Lviv (return by 22:00)</p></li>
      </ul>`;
const markup2 = `<ul class="js-tours__list">
        <li class="js-tous__item">
        <p class="tours-item__text">Departure from Kiev (08:00)</p>
        </li>
        <li class="js-tous__item">
        <p class="tours-item__text">St. Sophia's Cathedral (iconic UNESCO World Heritage site)</p>
        </li>
        <li class="js-tous__item">
        <p class="tours-item__text">Golden Gate (historical monument visit)</p>
        </li>
        <li class="js-tous__item">
        <p class="tours-item__text">Bessarabsky Market (tasting local delicacies)
          transition to the lake)</p>
        </li>
        <li class="js-tous__item"><p class="tours-item__text">Kiev Pechersk Lavra (exploration of the significant monastery)</p></li>
        <li class="js-tous__item"><p class="tours-item__text">Return to Kiev by 20:00</p></li>
      </ul>`;
const renderMarkup = (widthScreen, innerWidthScreen) => {
  if (widthScreen >= 1440 && innerWidthScreen >= 1440) {
    divContent.innerHTML = markup;
    contentDiv.innerHTML = markup2;
    priceContent.innerHTML = `<a href="#" class="tours-swiper__link">Book</a>
    <p class="tours-price">Price:<span class="tours-price__span">2000 UAH</span></p>`;
    contentPrice.innerHTML = `<a href="#" class="tours-swiper__link">Book</a>
    <p class="tours-price">Price:<span class="tours-price__span">3000 UAH</span></p>`;
  } else {
    divContent.innerHTML = `<p class="tours-swiper__text">
      This very interesting excursion will introduce you to the most beautiful
      lake of the Carpathians "Synevyr", the impressive and magical waterfall
      lake Synevirm "Shypit", which is also located in the Ukrainian
      Carpathians. You will have the opportunity to try Soymivska and
      Kelechynska mineral springs, drinks and delicious dishes of Carpathian
      cuisine and, of course, admire the beautiful scenery of the unique
      Ukrainian Carpathians.
    </p>`;
    contentDiv.innerHTML = `<p class="tours-swiper__text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      A non expedita, quidem saepe praesentium sequi rem eveniet
                      provident ducimus, reprehenderit unde quae dolore beatae
                      corrupti debitis quasi accusantium asperiores magnam quam.
                      Laudantium, omnis aliquid? Perspiciatis eveniet sunt
                      quaerat suscipit? Necessitatibus repellendus rerum vitae
                      cum assumenda dolores adipisci esse quibusdam corporis!
                    </p>`;
    priceContent.innerHTML = `<a href="#" class="tours-swiper__link">
        Book
      </a>
    `;
    contentPrice.innerHTML = `<a href="#" class="tours-swiper__link">
        Book
      </a>
    `;
  }
};

renderMarkup(widthScreen, innerWidthScreen);

window.addEventListener("resize", function () {
  let widthScreen = window.screen.width;
  let innerWidthScreen = window.innerWidth;
  renderMarkup(widthScreen, innerWidthScreen);
});
