var postorderTraversal = function(root) {
    const result = []; //sonuçları saklamak için boş bir dizi oluşturuyoruz

    function traverse(node){
        if(!node) return; //eğer node null ise alt ağaçları gezmeyi bırak
        traverse(node.left); //sol alt ağacı gez
        traverse(node.right); //sağ alt ağacı gez
        result.push(node.val); //değeri ekle
    }
    traverse(root); //kök dügümden başlayarak gezinmeyi başlat
    return result; //sonucu dön
};