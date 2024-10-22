/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function mergeTwoLists(list1, list2) {
    // Boş durumları kontrol et
    if (!list1) return list2;
    if (!list2) return list1;
    
    // İlk düğümleri karşılaştır ve en küçük olanı seç
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2); // Rekürsif çağrı
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next); // Rekürsif çağrı
        return list2;
    }
}