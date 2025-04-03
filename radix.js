// Function to get the digit at a specific place (i) from a number (num)
function getDigit(num, i) {
    // Extract the digit at place i (units, tens, hundreds, etc.)
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Function to calculate the number of digits in a number
function digitCount(num) {
    // Special case: if the number is 0, it has 1 digit
    if (num === 0) return 1;
    // Otherwise, calculate the number of digits using logarithm
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Function to find the maximum number of digits in the input array
function mostDigits(nums) {
    // Initialize maxDigits as 0
    let maxDigits = 0;
    // Loop through each number in the array
    for (let i = 0; i < nums.length; i++) {
        // Update maxDigits to the largest digit count in the array
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    // Return the maximum digit count
    return maxDigits;
}

// Main function for radix sort
function radixSort(nums) {
    // Find the maximum number of digits in the input array
    let maxDigitCount = mostDigits(nums);

    // Loop over each digit position, from least significant to most
    for (let k = 0; k < maxDigitCount; k++) {
        // Initialize an array of 10 empty subarrays (buckets)
        let digitBuckets = Array.from({ length: 10 }, () => []);

        // Place each number in the appropriate bucket based on the current digit
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            // Get the current digit at position k
            let digit = getDigit(num, k);
            // Push the number into the appropriate bucket
            digitBuckets[digit].push(num);
        }

        // Rebuild the nums array by concatenating all the buckets
        nums = [].concat(...digitBuckets);
    }

    // Return the sorted array
    return nums;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };