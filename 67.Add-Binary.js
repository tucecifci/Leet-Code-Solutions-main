/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    // İki stringin uzunluklarını eşitlemek için başlarına `0` ekle
    while (a.length < b.length) a = "0" + a;
    while (b.length < a.length) b = "0" + b;
    
    let carry = 0;  // Başlangıçta taşıma yok
    let result = ""; // Sonucu saklamak için boş bir string

    // Sağdan sola dolaş
    for (let i = a.length - 1; i >= 0; i--) {
        let sum = parseInt(a[i]) + parseInt(b[i]) + carry; // Basamak toplama işlemi

        // Sonuç basamağını belirle (0 veya 1 olacak)
        result = (sum % 2) + result;

        // Taşma değerini güncelle (0 veya 1 olacak)
        carry = Math.floor(sum / 2);
    }

    // Eğer en yüksek basamaktan sonra taşıma kaldıysa en başa ekle
    if (carry !== 0) result = carry + result;

    return result;
}

