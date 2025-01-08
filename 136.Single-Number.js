//solution 1
var singleNumber = function (nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num; //aynı elemanlar birbirini sıfırlar, bu yüzden sadece bir kez geçen eleman result içinde kalır
  }
  return result;
};

//solution 2
var singleNumber = function (nums) {
  const count = {}; //elemanların kaç kez geçtiğini tutmak için bir nesne

  for (let num of nums) {
    count[num] = (count[num] || 0) + 1; //elemanlar sayılır
  }

  for (let num in count) {
    if (count[num] === 1) {
      return Number(num);
    }
  }
};
