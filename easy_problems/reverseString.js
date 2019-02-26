// Write a function that reverses a string.The input string is given as an array of characters char[].

// Do not allocate extra space for another array, 
// you must do this by modifying the input array in -place with O(1) extra memory.

var reverseString = function (s) {

    for (let i = 0; i < s.length / 2; i++) {
        let nextToLast = (s.length - 1) - i
        let currentEle = s[i];
        s[i] = s[nextToLast];
        s[nextToLast] = currentEle;
    }

    return s;
};

//Runtime: 124 ms, faster than 50.75% of JavaScript online submissions for Reverse String.
// Memory Usage: 46.8 MB, less than 75.49 % of JavaScript online submissions for Reverse String.