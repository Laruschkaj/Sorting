// Selection Sort Function
function selectionSort(arr) {
    // Loop over the entire array (starting from the first element)
    for (let i = 0; i < arr.length; i++) {
        // Assume the current element (at index i) is the smallest
        let minIndex = i;

        // Compare the current element with every other element after it
        for (let j = i + 1; j < arr.length; j++) {
            // If we find an element smaller than the current smallest
            if (arr[j] < arr[minIndex]) {
                // Update minIndex to point to the new smallest element
                minIndex = j;
            }
        }

        // After finding the smallest element in the unsorted portion
        // Swap it with the element at the current index (i)
        if (minIndex !== i) {
            // Swap arr[i] and arr[minIndex]
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    // Return the sorted array after all iterations
    return arr;
}

module.exports = selectionSort;
