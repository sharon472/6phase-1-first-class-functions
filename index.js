// 1. takes a callback function and calls it
function receivesAFunction(callback) {
  return callback();
}

// 2. returns a named function
function returnsANamedFunction() {
  function greeting() {
    return "Hello am going to school!";
  }
  return greeting;
}

// 3. returns an anonymous function
function returnsAnAnonymousFunction() {
  return function() {
    return "travel!";
  };
}

