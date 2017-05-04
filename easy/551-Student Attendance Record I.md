You are given a string representing an attendance record for a student. The record only contains the following three characters:

'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.

Example 1:
Input: "PPALLP"
Output: True

Example 2:
Input: "PPALLL"
Output: False



```javascript
var checkRecord = function(s) {
    var arr = s.split("");
    var A_count = 0;
    var L_count = 0;
    for(var i=0 ; i<arr.length ; i++){
        if( arr[i] === "A" ){
            A_count++;
            L_count = 0;
            if( A_count === 2){
                return false;
            }
        }
        else if( arr[i] === "L" ){
            L_count++;
            if( L_count === 3){
                return false;
            }
        }
        else{
            L_count = 0;
        }
    }
    return true;
};

```