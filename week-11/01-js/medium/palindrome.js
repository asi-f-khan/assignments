/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  var n = str.length;
  var temp = str;
  str = "";
  for (var i = 0; i < n; i++) {
    if (temp[i] >= "a" && temp[i] <= "z") {
      str += temp[i];
    }
  }

  str2 = str.split("").reverse().join("");
  return str == str2;
}

module.exports = isPalindrome;
