function deleteDuplicates(head) {
    // Liste boşsa ya da tek elemanlıysa, bir şey yapmaya gerek yok
    if (!head || !head.next) {
        return head;
    }

    // Mevcut düğümü takip etmek için bir işaretçi
    let current = head;

    // Listeyi dolaş
    while (current.next) {
        // Eğer mevcut düğümün değeri, bir sonraki düğümün değeriyle aynıysa
        if (current.val === current.next.val) {
            // Tekrar eden düğümü atla
            current.next = current.next.next;
        } else {
            // Farklı değere geç
            current = current.next;
        }
    }

    // İşlenmiş listeyi döndür
    return head;
}