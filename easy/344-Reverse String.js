/*
Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
*/
var reverseString = function(s) {
    var a = s.split('');
    var str = a.slice();
    var ans = "";
    for(var i=0 ; i<Math.floor(str.length/2) ; i++){
        var tmp = str[i];
        str[i] = str[str.length-(i+1)];
        str[str.length-(i+1)] = tmp;
    }
    for(var j=0 ; j<str.length ; j++){
        ans = ans + str[j];
    }
    return ans;
};