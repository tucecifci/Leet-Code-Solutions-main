/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true; //Eğer kök düğüm boşsa, simetriktir

    function isMirror(t1,t2){
        if(!t1 && !t2) return true; // iki dügüm de null ise, simetriktir
        if(!t1 || !t2) return false; //biri null diğeri değilse, simetrik değil
        //dügüm değerleri eşit olmalı ve sol alt ve sağ-alt karşılaştırılmalı
        return(
            t1.val === t2.val &&
            isMirror(t1.left, t2.right) &&
            isMirror(t1.right, t2.left)
        )
    }
    return isMirror(root.left, root.right);
};