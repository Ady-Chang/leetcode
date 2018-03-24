

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, 
given nums = [0, 1, 0, 3, 12], 
after calling your function, nums should be [1, 3, 12, 0, 0].

```javascript
var moveZeroes = function(nums){
	var len = nums.length;
	for(var i=0 ; i<len ; i++){
		if(nums[i] ===0 ){
			for(var j=i+1 ; j<len ; j++){
				if(nums[j] !== 0){
					nums[i] = nums[j];
					nums[j] = 0;
					break;
				}
			}
		}
	}
};
```