
/*
Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital if it has more than one letter, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
Example 1:
Input: "USA"
Output: True
Example 2:
Input: "FlaG"
Output: False
Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.
*/





var detectCapitalUse = function(word) {
	var len = word.length;
	var compareA = word.charAt(0) + word.substring(1,len).toLowerCase();
	var compareB = word.toUpperCase();
	if(len <= 1){
		if( word === compareA){
			return true;
		}else{
			return false;
		}
	}
	else{
		if( word === compareA){
			return true;
		}
		else if( word === compareB){
			return true;
		}
		else{
			return false;
		}
	}
};