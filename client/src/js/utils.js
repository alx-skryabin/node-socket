import {URIlocal, URIprod} from './config'

function defineURI() {
  return document.location.host.indexOf('localhost')
    ? URIprod : URIlocal
}

export {defineURI}
