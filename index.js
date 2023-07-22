const divContent = document.querySelector(".js-container");
let screen = window.screen.width;

const markup = `<ul class="js-tours__list" style="list-style-type: disc;">
        <li class="js-tous__item">
          Departure from Lviv (07:00) / Stryi (08:00)
        </li>
        <li class="js-tous__item">
          Pylypets (overview of Shipit waterfall and lunch)
        </li>
        <li class="js-tous__item">
          Synevyr Pass (photographing and viewing of Carpathian panoramas)
        </li>
        <li class="js-tous__item">
          "Synevyr" National Park (brown bear rehabilitation center and
          transition to the lake)
        </li>
        <li class="js-tous__item">Stryi (21:00)/Lviv (return by 22:00)</li>
      </ul>`;

const renderMarkup = (totalScreen) => {
  if (totalScreen >= 1440) {
    divContent.innerHTML = markup;
  } else {
    divContent.innerHTML = `<p class="tours-swiper__text js-text">
      This very interesting excursion will introduce you to the most beautiful
      lake of the Carpathians "Synevyr", the impressive and magical waterfall
      lake Synevirm "Shypit", which is also located in the Ukrainian
      Carpathians. You will have the opportunity to try Soymivska and
      Kelechynska mineral springs, drinks and delicious dishes of Carpathian
      cuisine and, of course, admire the beautiful scenery of the unique
      Ukrainian Carpathians.
    </p>`;
  }
};

renderMarkup(screen);

window.addEventListener("resize", function () {
  let widthScreen = window.screen.width;
  renderMarkup(widthScreen);
});
