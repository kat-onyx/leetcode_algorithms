function depthFirstSearch(root, targetVal) {
    if (!root) return null;

    let nodes = [root];

    while (nodes.length > 0) {
        node = nodes.pop();

        if (node.val === targetVal) return node;

        if (node.right) nodes.push(node.right);
        if (node.left) nodes.push(node.left);
    }

    return null;
}


module.exports = {
    depthFirstSearch
};