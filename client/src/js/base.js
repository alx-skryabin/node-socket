const menu = () => {
  return `
    <div class="menu">
      <span>MENU — </span>
      <a href="/">Страница 1</a>
      <a href="/">Страница 2</a>
    </div>`
}

const querySection = () => {
  return `
    <div class="button">
      <button id="post">POST</button>
      <button id="get">GET</button>
    </div>
    <code class="msg" id="output-query">Result query will be printed here</code>`
}

const socketSection = () => {
  return `
    <div class="form">
      <input type="text" id="field" placeholder="Message...">
      <button id="send">Send</button>
    </div>
    <div class="msg" id="output-msg">The last message will be printed here</div>`
}

const template = () => {
  return `
    <!--${menu()}-->
    <h1>Express | Socket App!</h1>
    ${socketSection()}
    ${querySection()}
  `
}

export {template}
