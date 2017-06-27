var receivesAFunction = (callback) => {
  callback()
}

var returnsANamedFunction = () => {
  return function timesTen(a) {
    return a * 10
  }
}

var returnsAnAnonymousFunction = () => {
  return function(a) {
    return a * 5
  }
}
