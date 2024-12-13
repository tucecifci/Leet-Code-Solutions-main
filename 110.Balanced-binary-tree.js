var isBalanced = function(root) {
    function checkHeigth(node){
        if(!node) return 0; //boş dügümün yüksekliği 0'dır.
        const leftHeight = checkHeigth(node.left);
        if(leftHeight === -1) return -1;
        const rigthHeight = checkHeigth(node.right);
        if(rigthHeight === -1) return -1;

        if(Math.abs(leftHeight - rigthHeight) >1){
            return -1;
        }
        return Math.max(leftHeight, rigthHeight) +1;
    }
    return checkHeigth(root) !== -1;
};