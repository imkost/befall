"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function removeFromArray(array, value) {
  var index = array.indexOf(value);

  if (index >= 0) {
    array.splice(index, 1);
  }
}

function befall() {
  var fns = [];

  var eventEmitter = function eventEmitter(fn) {
    fns.push(fn);
  };

  eventEmitter.fire = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    fns.forEach(function (fn) {
      return fn.apply(undefined, args);
    });
  };

  eventEmitter.off = function (fn) {
    removeFromArray(fns, fn);
  };

  return eventEmitter;
}

exports.default = befall;
