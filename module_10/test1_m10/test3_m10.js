//Реализовать чат на основе эхо-сервера wss://echo-ws-service.herokuapp.com.
//Интерфейс состоит из input, куда вводится текст сообщения, и кнопки «Отправить».
//При клике на кнопку «Отправить» сообщение должно появляться в окне переписки.
//Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат
//Добавить в чат механизм отправки гео-локации

//При клике на кнопку «Гео-локация» необходимо отправить данные серверу и в чат вывести ссылку на https://www.openstreetmap.org/ с вашей гео-локацией.
//Сообщение, которое отправит обратно эхо - сервер, не выводить.

const wsUri = "wss://echo-ws-service.herokuapp.com";

function pageLoaded() {
  const textInput = document.querySelector(".text");
  const sendBtn = document.querySelector(".send");
  const geoBtn = document.querySelector(".geo");
  const infoOutput = document.querySelector(".info");
  const chatWindow = document.querySelector(".chat");

  const socket = new WebSocket(wsUri);
  //Сокеты
  socket.onopen = () => {
    infoOutput.innerText = "Соединение установлено";
  };
  socket.onmessage = (event) => {
    writeToChat(event.data, true);
  };
  socket.onerror = () => {
    infoOutput.innerText = "Произошла ошибка!";
  };

  //функция,которая записывает текст в чат и добавляет стиль для полученного и отправленного сообщения
  function writeToChat(message, isRecieved) {
    let messageHTML = `<div class="${
      isRecieved ? "recieved" : "sent"
    }">${message}</div>`;
    chatWindow.innerHTML += messageHTML;
  }

  //функция для отправки текста
  function sendMessage() {
    if (!textInput.value) return;
    socket.send(textInput.value);
    writeToChat(textInput.value, false);
    textInput.value === "";
  }

  //обработчик для кнопки отправки сообщения
  sendBtn.addEventListener("click", sendMessage);

  // Функция, выводящая текст об ошибке
  const error = () => {
    writeOutput("При получении местоположения произошла ошибка");
  };

  // Функция, срабатывающая при успешном получении геолокации
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    let link = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    addLink(link);
  };

  //функция для вставки ссылки в чат
  function addLink(link) {
    let element = `
    <a  href='${link}'
        target='_blank'
        style='text-decoration: none;
        background: #234720;
        margin: 5px 10px;
        padding: 10px 15px;
        color: white;'
        >
        Ссылка с вашей гео-локацией
        </a>
    `;
    chatWindow.innerHTML += element;
  }
  geoBtn.addEventListener("click", () => {
    if (!navigator.geolocation) {
      infoOutput.textContent = "Geolocation не поддерживается вашим браузером";
    } else {
      infoOutput.textContent = "Определение местоположения…";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  });
}
document.addEventListener("DOMContentLoaded", pageLoaded);
