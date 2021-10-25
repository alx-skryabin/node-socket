const template = () => {
  return `
    <h1>My Express App!</h1>
     <div class="menu">
      <span>MENU — </span>
      <a href="/">Страница 1</a>
      <a href="second.html">Страница 2</a>
    </div>
    <div class="button">
      <!--<button id="btn1">Первый</button>-->
      <!--<button id="btn2">Второй</button>-->
    </div>
    <div class="form">
      <input type="text" id="field" placeholder="Сообщение...">
      <button id="send">Отправить</button>
    </div>
    <div class="msg">The last message will be printed here</div>
  `
}

export {template}
