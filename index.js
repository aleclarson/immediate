
// Use a native promise to schedule functions. https://goo.gl/fuwiHB
var resolved = Promise.resolve()

// This supports an optional `context` as the first argument.
module.exports = function immediate(callback) {
  if (arguments.length > 1) {
    var context = arguments[0]
    callback = arguments[1]
  }
  if (typeof callback != 'function') {
    throw TypeError('Expected a function')
  }
  resolved.then(function() {
    try {
      if (context) {
        callback.call(context)
      } else {
        callback()
      }
    } catch(error) {
      console.error(error)
    }
  })
}
