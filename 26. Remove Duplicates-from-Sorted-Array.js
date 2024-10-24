/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;
    let i = 0;
    for(let j = 1; j<nums.length; j++) {
        if(nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j]
        }
    }
    return i+1;
};


// Elimizde sıralanmış bir dizi var ve aynı sayıların birden fazla olduğu yerler var. Bizim amacımız:
// Her sayının sadece bir kez kalmasını sağlamak.
// Dizi üzerinde çalışarak ilk kısmını benzersiz sayılarla doldurmak.
// Geri kalan kısım ise önemli değil (görmezden gelebilirsin).
// Adım Adım Açıklama:
// Dizi zaten sıralı olduğundan, aynı sayılar arka arkaya gelir. Yani eğer diziyi baştan sona tararsan, tekrar eden sayıları rahatça bulabilirsin. Bunu yaparken, iki işaretçi (pointer) kullanarak benzersiz sayıları dizinin başına yerleştirebiliriz.
// İşaretçilerin Kullanımı:
// İşaretçi 1 (i): Bu işaretçi benzersiz sayıların yerleştirileceği dizinin başındaki konumu tutar.
// İşaretçi 2 (j): Bu işaretçi ise diziyi tarayıp, benzersiz bir sayı bulduğunda onu dizinin başına (işaretçi 1'in gösterdiği yere) kopyalar.
// İşaretçi 1 her benzersiz sayı bulduğunda bir adım ilerler, çünkü o pozisyona yeni bir benzersiz sayı koyacağız.
// Çözümün Akış Şeması:
// Başlangıçta, dizinin ilk elemanı benzersiz kabul edilir. Dolayısıyla i = 0 olur ve diziyi taramaya ikinci elemandan başlarsın (j = 1).
// Diziyi baştan sona kadar tarayarak (j işaretçisi ile):
// Eğer nums[j] değeri nums[i] ile aynı değilse, bu yeni bir benzersiz sayıdır. O zaman i'yi bir artırırız ve bu yeni benzersiz sayıyı i konumuna kopyalarız.
// Eğer aynıysa (yani tekrar eden bir sayı bulmuşsak), i işaretçisi hareket etmez ve sadece j işaretçisi bir sonraki sayıya geçer.
// Diziyi bitirene kadar bu işlemi tekrarlarsın. Sonuç olarak, dizinin ilk i+1 elemanı benzersiz olacak.