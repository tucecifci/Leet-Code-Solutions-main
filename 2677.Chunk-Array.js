var chunk = function(arr, size){
    if(arr.length ===0) return []
    let chunkedArray = []; 

    for(let i = 0; i<arr.length; i+=size){ //her seferinde size kadar eleman alacağımız için indeksi size kadar artırmamız gerekir
        let chunk = arr.slice(i, i+size); //slice(start, end) i ile i+size arasındaki elemanları seçer
        chunkedArray.push(chunk);
    }
    return chunkedArray;
}