var select = function(list, filterFn) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    var currentResult = filterFn(list[i]);
    if ( currentResult ){
      result.push(list[i]);
    }
  }
  return result;
};

var list =[1,2,3,4,5,6,-1,4,3,9];

var greaterThanTwo = function(element) {
  return element > 2;
};

var divisibleByThree = function(element) {
  return (element % 3 === 0);
};
