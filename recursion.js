/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (!nums[i]) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0) {
  if (i === words.length - 1) return words[i].length;
  return Math.max(words[i].length, longest(words, i + 1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  if (str.charAt(i) === "") return "";
  return str.charAt(i) + everyOther(str, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  if (i >= str.length / 2) return true;
  if (str.charAt(i) !== str.charAt(str.length - (1 + i))) return false;
  return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr[i] === val) return i;
  if (arr[i] === undefined) return -1;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0) {
  if (str.charAt(i) === "") return "";
  return str.charAt(str.length - (1 + i)) + revString(str, i + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let final = [];
  for (let val in obj) {
    if (typeof obj[val] === "string") {
      final.push(obj[val]);
    }
    if (typeof obj[val] === "object") {
      final = final.concat(gatherStrings(obj[val]));
    }
  }

  return final;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;

  } else if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);

  } else {
    return binarySearch(arr, target, mid + 1, end);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
