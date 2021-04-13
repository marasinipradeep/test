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
 * fibonacci(5) returns [1,1,2,3,5]
 * 
 * @param {number} length
 * @returns {array}
 */
function fibonacci(length) {
  let arr = [0, 1];
  for (let i = 2; i < length + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
 return arr[length]
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
  var largest = 0;
  for (i = 0; i <= largest; i++) {
    if (array[i] > largest) {
      var largest = array[i];
    }
    return largest;
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
    for (var i = start; i <= end -1 ; i++) {
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

}
module.exports = {
  dummy,
  reverse,
  stringReverse,
  fibonacci,
  biggest,
};
