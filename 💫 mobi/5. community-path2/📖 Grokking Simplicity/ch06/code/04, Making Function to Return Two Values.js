function shift(array) {
  return array.shift();
}

/// Copy-on-write

function shift(array) {
  let array_copy = array.slice();
  let first = array_copy.shift();
  return {
    first: first,
    array: array_copy,
  };
}

/// Another option

function shift(array) {
  return {
    first: first_element(array),
    array: drop_first(array),
  };
}
