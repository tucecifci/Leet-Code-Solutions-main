var isPalindrome = function (s) {
  //tüm büyük harfleri küçük harfe çevir, alfasayısal olmayanları kaldır
  const filteredString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  //tersini al
  const reversedString = filteredString.split("").reverse().join("");
  //orijinal ve ters dizeleri karşılaştır, aynıysa döndür
  return filteredString === reversedString;
};
