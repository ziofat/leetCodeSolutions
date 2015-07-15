/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if(nums.length<2) return false;
    var set = {};
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] in set){
            if(Math.abs(set[nums[i]]-i)<=k) return true;
            else set[nums[i]] = i;
        } 
        else set[nums[i]] = i;
    }
    return false;
};