/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums.length<2) return false;
    var set = {};
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] in set) return true;
        else set[nums[i]] = 1;
    }
    return false;
};