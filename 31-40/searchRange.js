/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var start = -1;
    var end = -1;

    var right = nums.length -1;
    var left = 0;
    var mid;
    while(left<=right){
    	mid = parseInt((right + left) / 2);
    	if(nums[mid]>target) right = mid -1;
    	else if(nums[mid]<target) left = mid + 1;
    	else{
    		right = mid - 1;
    		start = mid;
    	}
    }
    if(start == -1) return [-1,-1];

    right = nums.length -1;
	left = 0;
	while(left<=right){
    	mid = parseInt((right + left) / 2);
    	if(nums[mid]>target) right = mid -1;
    	else if(nums[mid]<target) left = mid + 1;
    	else{
    		left = mid +1;
    		end = mid;
    	}
    }

    return [start,end];
};