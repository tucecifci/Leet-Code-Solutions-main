/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {"(" : ')', "[" : "]", "{" : "}"};
    let stack = [];
    for(let item of s){
        if(map[item]){
            stack.push(map[item]);
        }
        else if(stack.length > 0 && stack[stack.length - 1] == item) {
                stack.pop();
            }
            else return false;
        
    }
    return stack.length ==0;
};