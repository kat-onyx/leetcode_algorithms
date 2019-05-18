function treeSum(root, sum = 0) {
    if (!root) {
        return sum;
    }

    let visited = [root];

    while (visited.length > 0) {
        node = visited.pop();

        sum += node.val;
        if (node.left) visited.push(node.left);
        if (node.right) visited.push(node.right);
    }

    return sum;
}


module.exports = {
    treeSum
};