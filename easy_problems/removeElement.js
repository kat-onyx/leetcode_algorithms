//
// Given an array nums and a value val, remove all instances of that value in -place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.

// The order of elements can be changed.It doesn't matter what you leave beyond the new length.
var removeElement = function(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i -= 1;
    }
  }

  return nums.length;
};

//Runtime: 68 ms, faster than 41.30% of JavaScript online submissions for Remove Element.

//iterative solution
var preorderTraversal = function(root) {
  let result = [];

  if (root === null) {
    return result;
  }

  let queue = [root];

  while (queue.length > 0) {
    root = queue.shift();
    result.push(root.val);
    if (root.right != null) {
      queue.unshift(root.right);
    }
    if (root.left != null) {
      queue.unshift(root.left);
    }
  }

  return result;
};

//Runtime: 72 ms, faster than 27.01% of JavaScript online submissions for Binary Tree Preorder Traversal.
