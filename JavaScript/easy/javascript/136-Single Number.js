/*
Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Subscribe to see which companies asked this question
*/
var singleNumber = function(nums) {
	nums.sort();
	if(nums.length === 1){
		return nums[0];
	}
	for(var i=0 ; i<nums.length ; i++){
		var repeat ;
		if( nums[i] === repeat ){
			continue;
		}
		if( nums[i] === nums[i+1]){
			repeat = nums[i];
		}
		else{
			return nums[i];
		}
	}
};