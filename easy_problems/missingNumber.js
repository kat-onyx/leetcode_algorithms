var missingNumber = function (nums) {
    let sorted = mergeSort(nums);
    let smallestCount = 0

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === smallestCount) {
            smallestCount += 1
        }
    }
    return smallestCount
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }


    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));

    return merge(left, right)
};

function merge(arr1, arr2) {
    let merged = [];

    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            merged.push(arr1.shift())
        } else if (arr1[0] < arr2[0]) {
            merged.push(arr2.shift())
        } else {
            merged.push(arr2.shift())
        }
    }

    return merged.concat(arr1).concat(arr2);
}