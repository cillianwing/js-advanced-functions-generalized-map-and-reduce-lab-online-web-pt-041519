// Add your functions here
function map(sourceArray, sourceFunction) {
  let arr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    arr.push(sourceFunction(sourceArray[i]));
  }
  return arr;
}

function reduce(sourceArray, sourceFunction, startingValue=0) {
  let total = startingValue;
  for (let i = 0; i < sourceArray.length; i++) {
    
  }
}