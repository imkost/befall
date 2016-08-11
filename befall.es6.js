function removeFromArray(array, value) {
  const index = array.indexOf(value);

  if (index >= 0) {
    array.splice(index, 1);
  }
}

function befall() {
  const fns = [];

  const eventEmitter = (fn) => {
    fns.push(fn);
  }

  eventEmitter.fire = (...args) => {
    fns.forEach(fn => fn(...args))
  }

  eventEmitter.off = (fn) => {
    removeFromArray(fns, fn);
  };

  return eventEmitter;
}

export default befall;
