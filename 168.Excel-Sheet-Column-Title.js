var convertToTitle = function(columnNumber) {
    let result=""; //sütün başlığını saklayacağımız string

    while(columnNumber > 0){
        const remainder = (columnNumber - 1) % 26; //mod işlemiyle son harfi belirle
//excel sütün başlıkları 1 tabanlıdır ancak mod işlemi 0 tabanlı çalışır. bu nedenle -1 yaparak sistemimizi 0 tabanlı hale getiriyoruz
        const char = String.fromCharCode(65 + remainder); //harfi bul
        //ASCII tablosunda A'nın değeri 65tir
        result = char + result; //harfi başa ekle
        columnNumber = Math.floor((columnNumber - 1) / 26); //sayıyı güncelle
    }
    return result;
};