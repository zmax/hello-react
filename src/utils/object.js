Object.values = function(obj) {
  return Object.keys(obj).map(key => obj[key]);
}
