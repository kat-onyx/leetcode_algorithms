// Write a function to delete a node(except the tail) in a singly linked list, given only access to that node.

// Given linked list-- head = [4, 5, 1, 9], which looks like following:


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
// Runtime: 80 ms, faster than 43.07 % of JavaScript online submissions for Delete Node in a Linked List.