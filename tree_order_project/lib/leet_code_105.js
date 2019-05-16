// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


var buildTree = function (preorder, inorder) {
    if (preorder.length <= 0 && inorder.length <= 0) {
        return null;
    }

    let root = new TreeNode(preorder[0]);
    let pivot = inorder.indexOf(root.val);

    let leftInorder = inorder.slice(0, pivot);
    let rightInorder = inorder.slice(pivot + 1)

    let leftPreorder = preorder.filter((val) => leftInorder.includes(val))
    let rightPreorder = preorder.filter((val) => rightInorder.includes(val))

    let leftTree = buildTree(leftPreorder, leftInorder);
    let rightTree = buildTree(rightPreorder, rightInorder);

    root.left = leftTree;
    root.right = rightTree;

    return root
};