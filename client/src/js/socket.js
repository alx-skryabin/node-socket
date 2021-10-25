import {io} from 'socket.io-client'

const URI = 'http://localhost:3030'
const socket = io(URI, {})

const addEventForm = () => {
  const $submit = document.querySelector('#send')
  const $input = document.querySelector('#field')

  $submit.addEventListener('click', () => {
    if (!$input.value.trim()) return

    socket.emit('chat message', {
      message: $input.value
    })

    $input.value = ''
  })
}

const emitSocket = () => {
  const $msg = document.querySelector('.msg')

  socket.on('chat message', data => {
    $msg.textContent = data.message
  })
}

export {addEventForm, emitSocket}
