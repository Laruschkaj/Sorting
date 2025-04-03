// Helper function to merge two sorted sub-arrays into one sorted array
function merge(left, right) {
    const result = []; // Array to hold the merged result
    let leftIndex = 0; // Pointer for the left array
    let rightIndex = 0; // Pointer for the right array

    // Compare elements from both arrays and push the smaller element to the result array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]); // If left element is smaller, add it to result
            leftIndex++; // Move to the next element in the left array
        } else {
            result.push(right[rightIndex]); // If right element is smaller, add it to result
            rightIndex++; // Move to the next element in the right array
        }
    }

    // If there are remaining elements in the left array, add them to the result
    result.push(...left.slice(leftIndex));

    // If there are remaining elements in the right array, add them to the result
    result.push(...right.slice(rightIndex));

    // Return the merged sorted array
    return result;
}

// Function to recursively split the array and sort it
function mergeSort(arr) {
    // Base case: if the array has 1 or fewer elements, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into two halves
    const middle = Math.floor(arr.length / 2); // Find the middle index
    const left = arr.slice(0, middle); // Left half of the array
    const right = arr.slice(middle); // Right half of the array

    // Recursively sort both halves and merge them
    return merge(mergeSort(left), mergeSort(right));
}

module.exports = { merge, mergeSort };
