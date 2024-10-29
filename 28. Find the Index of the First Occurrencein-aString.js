/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
    if(needle == "") return 0;
    const n = haystack.length;
    const m = needle.length;
    for(let i=0; i<=n-m; i++){
        if(haystack.substring(i, i+m) === needle){
            return i;
        }
    }
return -1;
};