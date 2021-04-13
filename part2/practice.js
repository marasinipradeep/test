function dummy() {
  return 1;
}
/**
 * Reverse an array
 * 
 * @example
 * 
 * reverse([1,2,3]) returns [3,2,1]
 * 
 * @param {array} array
 * @returns {array}
 */
function reverse(array) {
  return array.reverse();
}

/**
 * Reverse a string
 * 
 * @example
 * 
 * stringReverse('hello') returns 'olleh'
 * 
 * @param {string} text
 * @returns {string}
 * 
 */
function stringReverse(text) {
  var splitString = text.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}


/**
 * return a fixed length fibonacci list
 * 
 * @example
 * 
 * fibonacci(5) returns [0,1,1,2,3,5]
 * 
 * @param {number} length
 * @returns {array}
 */
function fibonacci(n) {
  {
    if (n===1) 
    {
      return [0, 1];
    } 
    else 
    {
      var s = fibonacci(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
  }

}

/**
 * return the biggest number in the array
 * 
 * @example
 * 
 * biggest([1,3,5,7,9]) returns 9
 * 
 * @param {array} array
 * @returns {number}
 */
function biggest(array) {
  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    var currentNum = array[i];
    if (currentNum > max) {
      max = currentNum;
    }
  }
  return max;
}

/**
 * Creates an array of numbers progressing from 
 * start up to, but not including, end
 * 
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 * 
 * @example
 * 
 * range(0,4) returns [0,1,2,3]
 * 
 * @param {number} start 
 * @param {number} end 
 * @returns {array}
 */
function range(start, end) {
  var list = [];
  for (var i = start; i <= end - 1; i++) {
    list.push(i);
  }
  return list;
}

/**
 * Recursively flattens array.
 * 
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 * 
 * @example
 * 
 * flatten([1,[2,[3,4],[5,[6]]]]) returns [1,2,3,4,5,6]
 * 
 * @param {array} array
 * @returns {array}
 */
function flatten(array) {

  var flat = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      flat.push.apply(flat, flatten.apply(this, array[i]));
    } else {
      flat.push(array[i]);
    }
  }
  return flat;
}

module.exports = {
  dummy,
  reverse,
  stringReverse,
  fibonacci,
  biggest,
  range,
  flatten
};
