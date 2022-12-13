//Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert.

const btn = document.querySelector(".j-btn-test");

const scrW = window.screen.width
const scrH = window.screen.height

btn.addEventListener('click', () => {
  alert(`ширина экрана: ${scrW}, высота экрана: ${scrH}.`)
})