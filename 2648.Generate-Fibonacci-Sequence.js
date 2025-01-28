var fibGenerator = function*() {
   let [a,b] = [0,1]; //fibonacci dizisinin ilk iki sayısını tanımlıyoruz
   while(true){
    yield a; //a değerini döndür
    [a,b] = [b, a+b]; //a ve b değerlerini güncelle
   }
};