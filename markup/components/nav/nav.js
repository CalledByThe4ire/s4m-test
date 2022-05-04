document.addEventListener(`DOMContentLoaded`, () => {
  Array.from(document.querySelectorAll('.nav__list-item'))
    .filter((el) => el.classList.contains('nav__list-item--has-children'))
    .forEach((el) =>
      el.addEventListener('click', (evt) => {
        evt.currentTarget.classList.toggle('nav__list-item--is-opened');
      }),
    );
});
