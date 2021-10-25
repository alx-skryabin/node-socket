import './styles/index.css'

console.log('client is ready!')
document.querySelector('.app').textContent = 'My App!'

const URI = 'http://localhost:3000'

function getData(region) {
  fetch(`${URI}/api/data/get/${region}`, {
    method: 'GET',
  })
    .then(r => r.json())
    .then(data => {
      console.log('getData:', data)
    });
}

getData(26)


function setData(city) {
  fetch(`${URI}/api/data/set`, {
    method: 'POST',
    body: JSON.stringify({city}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(r => r.json())
    .then(data => {
      console.log('setData:', data)
    })
}

setData('NYC')

