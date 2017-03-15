
/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array,

and it should return false if every element is distinct.
*/

var containsDuplicate = function(nums) {
	if(nums.length <= 1){
		return false;
	}
        nums = nums.sort(function(a,b){
    	    return a-b;
        })

    for(var i=1 ; i<nums.length ; i++){
    	    if( nums[i-1] === nums[i] ){
    		    return true;
    	    }
    }
    return false;

};