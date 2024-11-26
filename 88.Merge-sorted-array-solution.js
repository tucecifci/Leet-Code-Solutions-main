function merge(nums1, m, nums2, n){
    let i = m-1; //nums1 gerçek elemanlarının sonu
    let j = n-1; //nums2 son eleman
    let k = m + n - 1; //nums1 son pozisyon

    while(i >= 0 && j >= 0){
        if(nums1[i] > nums2[j]){
            nums1[k] = nums1[i];
            i--;
        }else{
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    while(j>=0){
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}
