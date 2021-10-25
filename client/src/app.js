import './styles/index.css'
import {getData, setData} from './js/query'
import {addEventForm, emitSocket} from './js/socket'
import {template} from './js/base'

document.querySelector('.app')
  .innerHTML = template()


// init socket work
emitSocket()
addEventForm()

// init express query
getData(26)
setData('NYC')
