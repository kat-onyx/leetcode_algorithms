// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order and each of their nodes contain a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//     Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function (l1, l2) {
    //create a new linkedList with starting node value 0 (we don't care about this one, just starting it)
    let dummyList = new ListNode(0);
    let sum = 0;
    //set up a sum to add each link value to
    let carryInt = 0;
    //set up carry-over 
    let head = dummyList;
    //set the head so that we can "traverse" and add new nodes to the linkedList we set up

    while (l1 !== null || l2 != null || sum > 0) {
        //check that at least one of these values is viable
        if (l1 != null) {
            //if any of the nodes are undefined, we skip this.
            sum += l1.val
            l1 = l1.next;
        }
        if (l2 != null) {
            sum += l2.val
            l2 = l2.next;
        }
        if (sum >= 10) {
            //if the sum is greater than 10 for the current node addition, then we need to subtract 10 from sum and add the carry over to the next node addition set.
            sum -= 10
            carryInt = 1;
        }

        head.next = new ListNode(sum);
        //create a new node with the new sum
        head = head.next;
        //get to the next node;
        sum = carryInt;
        //set the sum (will be either 0 or 1)
        carryInt = 0;
        //reset the carry over int
    }

    return dummyList.next;
};

//Runtime: 124 ms, faster than 86.48% of JavaScript online submissions for Add Two Numbers.