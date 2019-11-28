// Add your functions here
function map(sourceArray, sourceFunction) {
  let arr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    arr.push(sourceFunction(sourceArray[i]));
  }
  return arr;
}