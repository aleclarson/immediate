
var assertType = require('assertType');

// Use a native promise to schedule functions. https://goo.gl/fuwiHB
var promise = Promise.resolve();

// This supports an optional `context` as the first argument.
module.exports = function immediate(context, callback) {
  if (arguments.length > 1) {
    assertType(callback, Function);
    promise.then(callback.bind(context));
  } else {
    callback = context;
    assertType(callback, Function);
    promise.then(callback);
  }
};
