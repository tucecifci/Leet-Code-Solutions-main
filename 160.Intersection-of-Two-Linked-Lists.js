var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null; //eğer listelerden biri boşşa kesişme olamaz.

    let pA = headA; // ilk liste
    let pB = headB; // ikinci liste

    while(pA !== pB){
        pA = pA ? pA.next : headB; //eğer pA boşşa, onu ikinci listenin başına geçir

        pB = pB ? pB.next : headA; //eğer pB boşsa, onu birinci listenin başına geçir
    }
    return pA; //kesişme dügümünü döndür
};