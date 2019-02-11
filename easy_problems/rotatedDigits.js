// X is a good number if after rotating each digit individually by 180 degrees, we get a valid number that is different from X.Each digit must be rotated - we cannot choose to leave it alone.

// A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other; 6 and 9 rotate to each other, and the rest of the numbers do not rotate to any other number and become invalid.

// Now given a positive number N, how many numbers X from 1 to N are good ?

var rotatedDigits = function (N) {
    let rotatedCount = 0;
    i = 1;

    while (i <= N) {
        if (isRotated(i)) {
            rotatedCount += 1;
        }
        i += 1;
    }
    return rotatedCount;
};

var isRotated = function (num) {
    let result = false;
    let rotated = {
        2: 5,
        5: 2,
        6: 9,
        9: 6
    }

    while (num > 0) {
        if (num % 10 === 3 || num % 10 === 4 || num % 10 === 7) {
            return false;
        } else if (rotated[num % 10]) {
            result = true;
        }
        num = Math.floor(num / 10)
    }

    return result;
}
// Runtime: 80 ms, faster than 60.19 % of JavaScript online submissions for Rotated Digits.