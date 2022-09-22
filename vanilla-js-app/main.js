import "./style.css"
import javascriptLogo from "./javascript.svg"
import { setupCounter } from "./counter.js"
import { getBook, getAllBooks, getUpdates, getAllUpdates } from "./books"

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Say Hi To Wenqi!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the link to visit my Github! 😊🎒
    </p>
  </div>
`

setupCounter(document.querySelector("#counter"))
// getAllBooks()
getAllUpdates()
