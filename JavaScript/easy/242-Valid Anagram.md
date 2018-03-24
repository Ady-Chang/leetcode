
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", 
t = "nagaram", return true.

s = "rat", 
t = "car", return false.

```javascript
var isAnagram = function(s, t){
        if( s.length !== t.length){
            return false;
        }
        s = preProcess(s);
        t = preProcess(t);
        for(var i=0 ; i<s.length ; i++){
            if(s[i] !== t[i]){
                return false;
            }
        }
        return true;
};


function preProcess(S){
        var result =    S.split('').sort(function(a,b){
            return a.localeCompare(b);
        });
        return result;
}
```