
/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
Subscribe to see which companies asked this question.
*/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */


var a = "avaabc";
var b = "acbfdsabfdsafdsa";

var canConstruct = function(ransomNote, magazine) {
	var factor = ransomNote.split("");
	var target = magazine.split("");
	var count = 0;

	for(var i=0 ; i<factor.length ; i++){
		for(var j=0 ; j<target.length ; j++){
			if( factor[i] === target[j] ){
				target[j] = "";
				count++;
				break;
			}
		}
		if( count !== (i+1) ){
		    return false;
		}
	}
	return count === factor.length? true : false;
};