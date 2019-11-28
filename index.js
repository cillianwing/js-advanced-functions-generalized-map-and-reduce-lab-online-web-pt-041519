// Add your functions here
function map(sourceArray, sourceFunction) {
  let arr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    arr.push(sourceFunction(sourceArray[i]));
  }
  return arr;
}

function reduce(sourceArray, sourceFunction, startingValue=[]) {
  let total = startingValue;
  for (let i = 0; i < sourceArray.length; i++) {
    total = sourceFunction(sourceArray[i], total)
  }
  return total;
}

  // describe("reduce returns true when all values are true", function() {
  //   it("reduces correctly", function(){
  //     sourceArray = [1, 2, true, "razmatazz"]
  //     expect(reduce(sourceArray, function(a, memo){ return !!a && !!memo})).to.be.true
  //   })
  // })