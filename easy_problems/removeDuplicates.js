
// Given a sorted array nums, remove the duplicates in -place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.

var removeDuplicates = function (nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums.indexOf(nums[i]) !== i) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};