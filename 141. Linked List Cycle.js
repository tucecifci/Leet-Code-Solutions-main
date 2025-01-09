var hasCycle = function(head) {
  const visited = new Set(); //daha önce görülen düğümleri saklamak için
  let current = head; //listeyi baştan itibaren gezmeye başlıyoruz

  while(current){
    if(visited.has(current)){
        return true; //eğer düğüm daha önce ziyaret edildiyse döngü vardır
    }
    visited.add(current); //düğümü sete ekliyoruz
    current = current.next;
  }
  return false;
};