
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.

The maximum number of consecutive 1s is 3.

```javascript
var findMaxConsecutiveOnes = function(nums) {
    var best_record = 0;
	var count = 0;
	var len = nums.length;

	for(var i=0 ; i<len ; i++){
		if(nums[i] === 1){
			count++;
			if( best_record < count){
				best_record = count;	
			}
			
		}
		else{
			if( best_record < count){
				best_record = count;	
			}
			count = 0;
		}
	}
	return best_record;
};
```
