module.exports = markyDeepLinks

var hashchange = require('hashchange')
var domReady = require('detect-dom-ready')

function markyDeepLinks (_prefix) {
  hashchange.update(function (hash) {
    var prefix = _prefix || 'user-content-'

    if (hash.indexOf(prefix) === 0) {
      hashchange.updateHash(hash.replace(prefix, ''))
    } else {
      var anchor = document.getElementById(prefix + hash)
      if (anchor) {
        window.scrollTo(window.scrollX, anchor.getBoundingClientRect().top + window.scrollY)
      }
    }
  })

  domReady(function () {
    hashchange.update()
  })
}
