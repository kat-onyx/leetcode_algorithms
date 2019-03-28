// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */

//Given an array, rotate the array to the right by k steps, where k is non-negative.


var rotate = function (nums, k) {

    for (var i = 0; i < k; i++)
        nums.unshift(nums.pop());
};

//Runtime: 96 ms, faster than 54.90% of JavaScript online submissions for Rotate Array.