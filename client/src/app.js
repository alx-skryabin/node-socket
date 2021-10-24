import './styles/index.css'

console.log('client is ready!')
document.querySelector('.app').textContent = 'My App!'

const URI = 'http://localhost:3000'

async function getData() {
  let res = await fetch(`${URI}/api/data/get/77`, {
    method: 'GET',
    mode: 'no-cors'
  })
    .then(r => r.json())
    .then(data => {
      // todo Не могу вывести ответ запроса
      console.log(data)
    });

  // console.log(res)
}

// getData()


async function setData() {
  let data = await fetch(`${URI}/api/data/set`, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({city: 'Moscow'}),
    headers: {
      ['Content-Type']: 'application/json'
    },
  })

  // data = await data.json()

  console.log(2222, data)
}

setData()

