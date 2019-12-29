# Find-Numbers-with-Even-Number-of-Digits


Given an array nums of integers, return how many of them contain an even number of digits.
 

Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
Example 2:

Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.
 

Constraints:

1 <= nums.length <= 500
1 <= nums[i] <= 10^5


## submission solution

```javascript

/**
 * @param {number[]} nums
 * @return {number}
 */

/*
陣列內元素確定皆為存在且型態皆為合語法的 number，
簡單的想法就是把每一個元素取出，轉成字串，再去取得 string length，
再做 modulus 結果，即可知道每一個元素的 digit 位數，
modulus === 0 ，count +1 ，最後返回 count
*/

function digitLength(num){
    const len = num.toString().length;
    if(len %2 === 0){
        return true;
    }
    return false;
};

var findNumbers = function(nums) {
    let count = 0;
    const len = nums.length;
    
    for(let i=0 ; i<len ; i++){
        if(digitLength(nums[i])){
            count++;
        }
    }
    return count;
};



```

![result.png](./result.png)