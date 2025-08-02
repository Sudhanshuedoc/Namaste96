// Problem Statement:
// Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; otherwise false.

// Requirements:
// Handles both positive and negative integers.
// Return falsefor negative numbers (not Palindromes).
// Constraints:
// Time Complexity: O(d)Where dis the number of digits.

// Space Complexity: O(1)Only a few variables are used.

// Examples:
// Input:121

// Output:true

// Input:-121

// Output:false

// Input:10

// Output:false

function isPalindrome(x) {
  if (x < 0) return false;
  let xCopy = x;
  let reverse = 0;
  while (x > 0) {
    let rem = x % 10;
    reverse = reverse * 10 + rem;
    x = Math.floor(x / 10);
  }
  return reverse === xCopy;
}
console.log(isPalindrome(121));
