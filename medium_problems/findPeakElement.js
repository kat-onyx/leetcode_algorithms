// A peak element is an element that is greater than its neighbors.

// Given an input array nums, where nums[i]≠ nums[i + 1], find a peak element and return its index.

// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

// You may imagine that nums[-1] = nums[n] = -∞.
var findPeakElement = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i;
        } else if (nums[nums.length - 1] > nums[nums.length - 2]) {
            return nums.length - 1;
        }
    }
    return 0;
};

//Runtime: 72 ms, faster than 36.56% of JavaScript online submissions for Find Peak Element.