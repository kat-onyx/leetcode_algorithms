//You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters.Letters are case sensitive, so "a" is considered a different type of stone from "A".

//     Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0

var numJewelsInStones = function (J, S) {
    let jewelCount = 0;
    let jewelHash = {};

    for (let i = 0; i < J.length; i++) {
        let currentJewel = J[i]
        jewelHash[currentJewel] = true;
    }

    for (let j = 0; j < S.length; j++) {
        let currentLetter = S[j]
        if (jewelHash[currentLetter]) {
            jewelCount += 1;
        }
    }

    return jewelCount;
};