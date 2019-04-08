//Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
var threeSum = function (nums) {
    let sets = new Set();
    let list = [];

    if (nums.length < 3) {
        return [];
    };
    nums = nums.sort(function (a, b) { return a - b });

    for (let i = 0; i < nums.length - 2; i++) {
        let start = i + 1;
        let end = nums.length - 1;
        let currEle = nums[i];

        while (start < end) {
            let sum = addEles(currEle, nums[start], nums[end]);
            if (sum === 0) {
                let key = `${currEle}${nums[start]}${nums[end]}`;

                if (!sets.has(key)) {
                    sets.add(key)
                    list.push([currEle, nums[start], nums[end]])
                }
                start += 1;
                end -= 1;

            } else if (sum > 0) {
                end -= 1;
            } else {
                start += 1;
            }
        }
    }
    return list;
};

var addEles = function (a, b, c) {
    return a + b + c;
};

//Runtime: 292 ms, faster than 36.74% of JavaScript online submissions for 3Sum.