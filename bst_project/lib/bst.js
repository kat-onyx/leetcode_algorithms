class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }
    insert(val, root=this.root) {
        if (!this.root) {
            this.root = new TreeNode(val);
            return;
        } 

        if (val < root.val) {
            if (!root.left) {
                root.left = new TreeNode(val)
            } else {
                this.insert(val, root.left)
            }
        } else {
            if (!root.right) {
                root.right = new TreeNode(val)
            } else {
                this.insert(val, root.right)
            }
        }
    }

    searchRecur(val, root=this.root) {
        if (!root) {
            return false;
        }

        if (val < root.val) {
            return this.searchRecur(val, root.left)
        } else if (val > root.val) {
            return this.searchRecur(val, root.right)
        } else {
            return true;
        }
    } 

    searchIter(val, root = this.root) {
        if (!root) {
            return false;
        }

        let stack = [root];
        
        while (stack.length > 0) {
            let currentNode = stack.pop();
            
            if (currentNode) {
                if (currentNode.val < val) {
                    stack.push(currentNode.right)
                } else if (currentNode.val > val) {
                    stack.push(currentNode.left)
                } else {
                    return true;
                }
            }
        }
        return false;
    }
}

module.exports = {
    TreeNode,
    BST
};