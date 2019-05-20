var levelOrder = function (root) {
    let results = [];
    let queue = [root];
    if (!root) {
        return results;
    }
    while (queue.length > 0) {
        let currentChildren = [];

        for (let i = 0; i < queue.length; i++) {
            if (queue[i].left != null) {
                currentChildren.push(queue[i].left);
            }
            if (queue[i].right != null) {
                currentChildren.push(queue[i].right);
            }
        }
        results.push(queue);
        queue = currentChildren;
    }

    results.map(result => {
        for (let i = 0; i < result.length; i++) {
            result[i] = result[i].val
        }
    })
    return results;
};
// Runtime: 60 ms, faster than 100.00 % of JavaScript online submissions for Binary Tree Level Order Traversal.