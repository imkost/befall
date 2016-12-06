function befall(_isKinded) {
  var isKinded = _isKinded === true ? true : false;
  var kinds = {};

  function emitter() {
    var args = extractArgs(arguments);
    var kind = args.kind;
    var params = args.params;

    if (typeof params[0] === 'function') {
      register(kind, params[0]);
    } else {
      fire(kind, params);
    }
  }

  emitter.off = () => {
    var args = extractArgs(arguments);
    off(args.kind, args.params);
  };

  emitter.fire = fire;

  function extractArgs(args) {
    var kind;
    var params;

    if (isKinded) {
      kind = args[0];
      params = Array.prototype.slice.call(args, 1);
    } else {
      kind = '_';
      params = args;
    }

    return { kind: kind, params: params };
  }

  function register(kind, fn) {
    (kinds[kind] || (kinds[kind] = [])).push(fn);
  }

  function fire(kind, params) {
    var fns = kinds[kind] || [];
    var fnsCount = fns.length;
    var prevent = false;
    var i;

    for (i = 0; i < fnsCount; i++) {
      if (fns[i].apply(null, params)) {
        prevent = true;
      }
    }

    return prevent;
  };

  function off(kind, fn) {
    removeFromArray(kinds[kind], fn);
  }

  return emitter;
}

function removeFromArray(array, value) {
  var index = array.indexOf(value);

  if (index >= 0) {
    array.splice(index, 1);
  }
}

module.exports = befall;
