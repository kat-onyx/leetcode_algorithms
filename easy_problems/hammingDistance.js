


var hammingDistance = function (x, y) {
    let dist = 0;
    let val = x ^ y

    while (val != 0) {
        dist += 1;
        val &= val - 1;
    }

    return dist
};

//Runtime: 68 ms, faster than 54.66% of JavaScript online submissions for Hamming Distance.