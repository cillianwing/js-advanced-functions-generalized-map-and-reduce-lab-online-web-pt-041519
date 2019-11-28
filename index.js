// Add your functions here
function map(sourceArray, sourceFunction) {
  let arr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    arr.push(sourceFunction(sourceArray[i]));
  }
  return arr;
}

function reduce(sourceArray, sourceFunction, startingValue=0) {
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1
  
  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }
  
  return r;
}
