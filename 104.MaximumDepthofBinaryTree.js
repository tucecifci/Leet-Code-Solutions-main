
var maxDepth = function(root) {
    if(!root) return 0; // dügüm boşşa derinlik sıfır olur
//sol ve sağ alt ağaçların maksimum derinliği
const leftDepth = maxDepth(root.left);
const rightDepth = maxDepth(root.right);

return 1 + Math.max(leftDepth, rightDepth); //max derinlik, sol ve sağ derinliklerin en büyügüne 1 eklenerek hesaplanır.
};