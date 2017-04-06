function befall() {
  var fns = [];
  var b = emitter.bind(fns);
  b.off = off.bind(fns);

  return b;
}

function befallKind() {
  var emitters = {};

  return function(kind) {
    emitters[kind] || (emitters[kind] = befall());
  };
}

function emitter() {
  var fns = this;
  var args = arguments;
  var first = args[0];

  if (typeof first === 'function') {
    fns.push(first);
  } else {
    var fnsCount = fns.length;
    var prevent = false;

    for (var i = 0; i < fnsCount; i++) {
      if (fns[i].apply(null, args) === true) {
        prevent = true;
      }
    }

    return prevent;
  }
}

function off(fn) {
  var fns = this;

  if (fn) {
    removeFromArray(fns, fn);
  } else {
    fns.length = 0;
  }
}

function removeFromArray(array, value) {
  while (true) {
    var index = array.indexOf(value);

    if (index >= 0) {
      array.splice(index, 1);
    } else {
      break;
    }
  }
}

module.exports = befall;
module.exports.befallKind = befallKind;
