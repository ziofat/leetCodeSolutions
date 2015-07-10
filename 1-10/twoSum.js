/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {};
    for(var i = 0; i < nums.length; i++){
        hash[nums[i]] = i;
    }

    for(i = 0; i < nums.length; i++){
        var valueNeeded = target - nums[i];
        if(hash.hasOwnProperty(valueNeeded)&&hash[valueNeeded]!=i){
            return [i+1,hash[valueNeeded]+1];
        }
    }
};