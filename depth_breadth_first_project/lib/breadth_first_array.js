function breadthFirstArray(root) {
    if (!root) {
        return [];
    }

    let queue = [root];
    let BFArray = [];

    while (queue.length > 0) {
        let currentNode = queue[0];
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
        BFArray.push(currentNode.val);
        queue.shift();
    }

    return BFArray;
}

module.exports = {
    breadthFirstArray
};