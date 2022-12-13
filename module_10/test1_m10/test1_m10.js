//Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео).
//При клике на кнопку иконка должна меняться на icon_02.Повторный клик меняет иконку обратно.

const btn = document.querySelector(".j-btn-test");

btn.addEventListener("click", clickMe);

function clickMe(event) {
  if (event.target.closest(".j-btn-test")) {
    btn.classList.toggle("_active");
  }
  if (!event.target.closest(".j-btn-test")) {
    btn.classList.toggle("_active");
  }
}
