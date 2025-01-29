var once = function(fn) {
    let called = false; //fonksiyonun çağırılıp çağırılmadığını kontrol eder
    let result; //ilk çağrının sonuçunu saklar
    return function(...args){
        if(!called){
            called = true; //ilk kez çağrıldığında, çağrıldığını işaretler
            result=fn(...args); //fonksiyonu çağırır ve sonucu saklar
            return result; //sonucu döndür
        }
        return undefined;
    }
};