// Problem Statement:
// Write a function secondLargest(arr) that returns the second largest distinct number in an array.

// Requirements:
// The array must contain at least two elements.
// If all elements are equal, return: No second largest found.
// If the array has fewer than two elements, return: Array should have at least two numbers.
// Examples:
// Input: arr = [0, 3, 5, 2, 7, 9] → Output: 7

// Input: arr = [4, 4, 4, 4] → Output: No second largest found

// Input: arr = [5] → Output: Array should have at least two numbers

// Input: arr = [10, 20] → Output: 10

// Constraints:
// Time Complexity: O(n) — Single pass through the array.

// Space Complexity: O(1) — Constant space.

function secondLargest(arr) {
  if (arr.length < 2) return "Arrray should have atleast two numbers";
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let num of arr) {
    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (num > secondLargest && num != firstLargest) {
      secondLargest = num;
    }
  }
  return secondLargest === -Infinity
    ? "No Second largest found"
    : secondLargest;
}
console.log(secondLargest([0, 3, 5, 2, 7, 9]));
