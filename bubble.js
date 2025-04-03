// Bubble Sort implementation
function bubbleSort(arr) {
    // Swap helper function to swap two elements in the array
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; // Swaps values using array destructuring
    };

    // Outer loop: Controls how many full passes through the array
    for (let i = arr.length; i > 0; i--) {
        let swapped = false; // Flag to track if any swaps occur in this pass

        // Inner loop: Iterates through the array up to the unsorted portion (i - 1)
        for (let j = 0; j < i - 1; j++) {
            // If the current element is greater than the next, swap them
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                swapped = true; // Mark that a swap has occurred
            }
        }

        // If no swaps occurred during this pass, the array is already sorted, so break early
        if (!swapped) break;
    }

    return arr; // Return the sorted array
}

module.exports = bubbleSort; // Exports the function for use in other files. Another file can require('./bubbleSort') to import and use it.