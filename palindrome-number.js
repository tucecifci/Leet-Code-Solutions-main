/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var a = String(x);
    function reverse(a){
    return a.split("").reverse().join("");
}
if(a === reverse(a)){
        return true;
    }else{
        return false;
    }
   
   
};
