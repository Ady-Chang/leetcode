

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?

```javascript
function addDigits(num){
	var result = num;
	var digit ;
	do{
		var A =  toStr(result).split('');
		result = sum(A);
		digit = toStr(result).split('').length;
	}while(digit >1);
	return result;
}

function sum(num){
	var sum = 0;
	for(var i=0 ; i<num.length ; i++){
		var sum = sum + Number(num[i]);
	}
	return sum;
}

function toStr(n){
	return n.toString();
}
```