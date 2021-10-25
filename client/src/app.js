import './styles/index.css'
import {getData, setData} from './js/query'
import {template} from './js/base'

document.querySelector('.app')
  .innerHTML = template()

getData(26)
setData('NYC')
