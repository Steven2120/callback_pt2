const identity = function (value) {
  return value;
};

const indexOf = function (array, target) {
  //array = [1], target = 1
  var result = -1;

  each(array, function (item, index) {
    //item = 1
    if (item === target && result === -1) {
      result = index;
      //result = 1
    }
  });

  return result;
};

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (let prop in collection) {
      iterator(collection[prop], prop, collection);
    }
  }
};

const map = function (collection, iterator) {
  var result = [];

  each(collection, function (element, index) {
    result.push(iterator(element));
  });

  return result;
};

const filter = function (collection, callback) {
  let result = [];
  each(collection, function (num) {
    if (callback(num)) {
      result.push(num);
    }
  });
  return result;
};

// reject([1, 2, 3, 4, 5, 6], isEven);
// const reject = function (collection, callbackTest) {
//   let result1 = [];
//   each(collection, function (num) {
//     if (!callbackTest(num)) {
//       result1.push(num);
//     }
//   });
//   return result1;
// };

const reject = function (collection, callbackTest) {
  return filter(collection, function (value) {
    return !callbackTest(value);
  });
};

// const uniq = function (array) {
//   let result2 = [];
//   each(array, function (num) {
//     result2.push(array.indexOf(num));
//   });
//   return result2;
// };

const uniq = function (array) {
  let result2 = [];
  each(array, function (num) {
    if (indexOf(result2, num) === -1) {
      result2.push(num);
    }
  });
  return result2;
};

//let array = [1,2,3] let result = array.reduce((startingValue, accumulatedValue) => {
// })
const reduce = function (collection, iterator, accumulator) {
  let initializing = arguments.length === 2;
  each(collection, function (value) {
    if (initializing) {
      accumulator = value;
      initializing = false;
    } else {
      accumulator = iterator(accumulator, value);
    }
  });
  return accumulator;
};

module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};
