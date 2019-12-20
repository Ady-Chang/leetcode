# subtract-the-product-and-sum-of-digits-of-an-integer

Given an integer number n, 
return the difference between the product of its digits and the sum of its digits.
 

Example 1:

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
Example 2:

Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
 

Constraints:

1 <= n <= 10^5



## submission solution

```javascript
/**
 * @param {number} n
 * @return {number}
 

num 是 number ， corner case 就是 num === 0
再來就是要取 num 每個數字的乘積與和
比較簡單的方法就是把 num 轉成 string 打散在 array 裡面之後， 在解析成整數，

這樣就可以簡單的取乘積跟和
然後在以乘積 - 和，即得到答案

 */


function sum(num){
    return num.reduce( (acc , cur) => acc + cur);
}

function multiply(num){
    let ans = 1;
    num.forEach( (ele) => {
        ans *= ele;
    });
    return ans;
}

function parse(num){
    let arr = num.toString().split('');
    return arr.map( (ele) => {
        return Number.parseInt(ele , 10);
    })
}

var subtractProductAndSum = function(n) {
    if(!n){
        return 0;
    };
    const arr = parse(n);
    return multiply(arr) - sum(arr);
    
};


```

![pic.png](./pic.png)