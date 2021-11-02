import {defineURI} from './utils'

const URI = defineURI()

async function getData(region) {
  return await fetch(`${URI}/api/data/get/${region}`, {
    method: 'GET',
  }).then(r => r.json())
}

async function setData(city) {
  return await fetch(`${URI}/api/data/set`, {
    method: 'POST',
    body: JSON.stringify({city}),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(r => r.json())
}

const tempDisableBtn = (btn, wrap) => {
  btn.setAttribute('disabled', 'disabled')
  setTimeout(() => {
    btn.removeAttribute('disabled')
    wrap.textContent = 'Result query will be printed here'
  }, 5000)
}

const displayResult = (data, btn) => {
  const $msg = document.querySelector('#output-query')
  $msg.textContent = JSON.stringify(data.data)
  tempDisableBtn(btn, $msg)
}

function initEventQuery() {
  const $post = document.querySelector('#post')
  const $get = document.querySelector('#get')

  $post.addEventListener('click', () => {
    setData('Moscow').then(data => displayResult(data, $post))
  })

  $get.addEventListener('click', () => {
    getData(26).then(data => displayResult(data, $get))
  })
}

export {initEventQuery}
