function insertionSort(arr) {
    // Outer loop: starts from the second element (index 1)
    // since the first element is considered "sorted" initially
    for (let i = 1; i < arr.length; i++) {
        // Store the current value at index i, which we want to insert into the sorted portion
        const currentValue = arr[i];

        // Inner loop: compare the current value with the elements in the sorted portion (left side of the array)
        let j = i - 1;
        // Keep shifting elements that are greater than the current value to the right to make space for insertion
        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j]; // Shift the element to the right
            j--; // Move to the previous element
        }

        // Insert the current value at its correct position
        arr[j + 1] = currentValue;
    }

    // Return the sorted array
    return arr;
}

module.exports = insertionSort; // Exports the function for use in other files.
