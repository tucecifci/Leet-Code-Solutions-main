var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return null;

    const mid = Math.floor(nums.length / 2); // orta eleman

    const root = {
        val: nums[mid], //orta eleman kök dügüm olur
        left: null, //sol alt ağaç
        right: null //sağ alt ağaç
    }
    root.left = sortedArrayToBST(nums.slice(0,mid)); //sol alt ağacı oluşturur
    root.right = sortedArrayToBST(nums.slice(mid+1)); //sağ alt ağacı oluşturur

    return root;
};