
var isNodeJS = require('isNodeJS');
var isReactNative = require('isReactNative');

var immediate;

if (isNodeJS) {
  immediate = function(func) {
    process.nextTick(func);
  };
} else if (isReactNative) {
  immediate = function(func) {
    global.setImmediate(func);
  };
} else {
  immediate = function(func) {
    global.setTimeout(func, 0);
  };
}

var assertType = require('assertType');

module.exports = function(context, func) {
  if (arguments.length > 1) {
    assertType(func, Function);
    immediate(function() {
      func.call(context);
    });
  } else {
    assertType(context, Function);
    immediate(context);
  }
};
