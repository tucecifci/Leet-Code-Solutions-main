var inorderTraversal = function(root){
    let result = []; //sonuçları saklamak için bir liste

    function traverse(node){
        if(!node) return; //eğer dügüm (node) boşsa, dur
        traverse(node.left) //sol alt ağacı dolaş
        result.push(node.val); //kök dügümü ekle
        traverse(node.right); // sağ alt ağacı dolaş
    }
    traverse(root); //kök dügümden başla
    return result;
}