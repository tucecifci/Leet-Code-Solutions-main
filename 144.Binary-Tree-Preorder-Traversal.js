var preorderTraversal = function(root) {
    const result = []; //sonuçların tutulabileceği bir dizi

    function traverse(node){
        if(!node) return; //eğer düğüm null ise, bu alt ağacı gezmeyi bırak

        result.push(node.val); //düğümün değerini result dizisine ekler
        traverse(node.left); //sol alt ağacı gez
        traverse(node.right); //sağ alt ağacı gez
    }
    traverse(root); //kök düğümden başlayarak gezinmeyi başlat
    return result;
};