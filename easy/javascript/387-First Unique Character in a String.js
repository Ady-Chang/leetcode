
/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/
/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
	var target = s.split("");
	var len = target.length;
	var flag = 0;

	for(var i=0 ; i<(len-1) ; i++){
	    if(target[i] !== true){
    		for(var j=(i+1) ; j<len ; j++){
    			if( target[i] === target[j] ){
    				target[j] = true;
    				flag = 1;
    			}
    		}
    		if(flag === 1){
    			target[i] = true;
    		}
    		flag = 0;
	    }
	}

	for(var i=0 ; i<len ; i++){
		if(target[i] !== true){
			return i;
		}
	}
	return -1;
};