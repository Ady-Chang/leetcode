
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
