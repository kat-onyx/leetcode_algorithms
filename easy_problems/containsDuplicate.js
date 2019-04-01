var containsDuplicate = function (nums) {
    let dups = {};

    for (let i = 0; i < nums.length; i++) {
        let currentEle = nums[i]
        if (dups[currentEle] == 1) {
            return true;
        } else {
            dups[currentEle] = 1;
        };
    };
    return false;
};

//Your runtime beats 86.74 % of javascript submissions.