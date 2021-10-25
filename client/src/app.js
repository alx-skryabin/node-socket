import './styles/index.css'
import {getData, setData} from './js/query'

document.querySelector('.app')
  .textContent = 'My Express App!'

getData(26)
setData('NYC')
