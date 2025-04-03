// The pivot function accepts an array, a start index, and an end index.
// It assumes the pivot is always the first element (arr[start]) and moves it to its correct position.
function pivot(arr, start = 0, end = arr.length - 1) {
    // Set the pivot to be the first element.
    let pivotElement = arr[start];
    let swapIndex = start; // This will track the correct index for the pivot element.

    // Loop through the array starting from the element after the pivot.
    for (let i = start + 1; i <= end; i++) {
        // If the current element is smaller than the pivot, move it to the left of the pivot.
        if (arr[i] < pivotElement) {
            swapIndex++;  // Move the swapIndex to the right.
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];  // Swap the elements.
        }
    }

    // After the loop, swap the pivot element with the element at swapIndex.
    // This places the pivot in its correct position (all smaller elements are on the left, and larger ones on the right).
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

    // Return the index of the pivot element, now in its correct position.
    return swapIndex;
}

// The quickSort function accepts an array, a left index, and a right index.
// It recursively sorts the array by partitioning it with the pivot function.
function quickSort(arr, left = 0, right = arr.length - 1) {
    // Base case: If the left index is greater than or equal to the right index, no sorting is needed.
    if (left >= right) return arr;

    // Partition the array and get the pivot's index.
    let pivotIndex = pivot(arr, left, right);

    // Recursively call quickSort on the left part of the array (elements smaller than the pivot).
    quickSort(arr, left, pivotIndex - 1);

    // Recursively call quickSort on the right part of the array (elements larger than the pivot).
    quickSort(arr, pivotIndex + 1, right);

    // Return the sorted array.
    return arr;
}

module.exports = quickSort;
