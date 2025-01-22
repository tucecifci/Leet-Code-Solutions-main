var titleToNumber = function(columnTitle) {
    let result = 0; //sütun numarasını saklamak için değişken atıyoruz

    for(let i = 0; i<columnTitle.length; i++){ 
        const charValue = columnTitle.charCodeAt(i) - 64;//i. harfin ASCII kodunu döndürür 
        //harfin excel sütün numarasındaki karşılığını bulmak için 64 çıkarılır
        result = result * 26 + charValue; //sütun başlığı 26 tabanında olduğu için her harf, daha yüksek bir basamağı temsil eder
    }
    return result;
};