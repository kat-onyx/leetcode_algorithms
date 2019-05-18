let answer = 0;

function treeHeight(root, depth = 0) {
    if (!root) return -1;
    
    if (root) {
      answer = Math.max(depth, answer)
    }

    treeHeight(root.left, depth + 1);
    treeHeight(root.right, depth + 1);

    return answer;
}


module.exports = {
    treeHeight
};