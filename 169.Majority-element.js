var majorityElement = function(nums) {
    nums.sort((a,b) => a-b);
    return nums[Math.floor(nums.length / 2)]; //Çoğunluk elemanı dizide  n/2'den fazla yer kapladığından, sıralandığında dizinin ortasına denk gelir.
};