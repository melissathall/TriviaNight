/* 
  Given an array of integers
  return the index where the smallest integer is located

  return -1 if there is no smallest integer (array is empty) 
  since -1 is not a valid index, this indicates it couldn't be found

  If the smallest integer occurs more than once, return the index of the first one.
*/

var nums1 = [5, 2, 3];
var expected1 = 1;

var nums2 = [5, 4, 2, 2, 3];
var expected2 = 2;

var nums3 = [];
var expected3 = -1;

/**
 * Returns the index of the smallest number from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} Index of smallest number or -1 if empty given array.
 */
function indexOfMinVal(nums) {
    // code here
    if (nums.length === 0) {
      return -1;
    } else {
      var minNum = nums[0];
  
      for (var i = 1; i < nums.length; i++) {
        if (minNum > nums[i]) {
          minNum = nums[i];
        }
      }
      return nums.indexOf(minNum);
    }
  }

// console.log(indexOfMinVal(nums1));
// console.log(indexOfMinVal(nums2));
// console.log(indexOfMinVal(nums3));

/*******************************************************************************/

/* 
  Given an array, reverse it's items in place
  return the array after reversing it

  Do it in place without using any built in methods
*/

var arr1 = [1, 2, 3];
var expected1 = [3, 2, 1];

var arr2 = ["a", "b"];
var expected2 = ["b", "a"];

var arr3 = ["a"];
var expected3 = ["a"];

var arr4 = [];
var expected4 = [];

/**
 * Reverses the given arr in place without built in methods
 * BONUS: Do this in place without built ins
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @returns {Array<any>} The given arr after being reversed.
 */
function reverseArr(items) {
// var arrElem0;
// var arrElem1;
// var arrElem2;

    if (items.length <= 1) {
        return items;
    } else {
        for (var i=0; i<items.length; i++) {
            var arrElem;
            arrElem+i = items[i];
            
        }
    }

}

console.log(reverseArr(arr1));
console.log(reverseArr(arr2));
console.log(reverseArr(arr3));
console.log(reverseArr(arr4));