var isSameTree = function(p,q){
    if(!p && !q) return true; // iki dügüm de null ise true döner
    if(!p || !q) return false; //biri null, digeri değilse false döner
    if(p.val !== q.val) return false; // dügüm değerleri farklıysa false döner

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}