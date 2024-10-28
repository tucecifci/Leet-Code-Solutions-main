/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k=0;  // İlk boş konumu tutmak için kullanacağımız değişken
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val){
            nums[k] = nums[i]; // Val olmayan elemanları başa taşı
            k++; // K'yı bir artırarak yeni konuma geç
        }
        
    }
    return k; // Val olmayan elemanların sayısını döndür
};