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

export {getData, setData}
