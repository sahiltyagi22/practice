// Given two sorted arrays nums1 and nums2 of size m and n respectively,
//  return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).


function brute(nums1 , nums2){
    let n = nums1.length
    let m = nums2.length

    let i=0; let j=0

    let storageArr = []

    while(i<n && j<m){
        if(nums1[i] < nums2[j]){
            storageArr.push(nums1[i])
            i++
        }else if(nums1[i] > nums2[j]){
            storageArr.push(nums2[j])
            j++
        }else{
             storageArr.push(nums1[i])
            storageArr.push(nums2[j])
             i++
            j++
        }
    }

    while(i<n){
        storageArr.push(nums1[i])
            i++
    }

    while(j<m){
        storageArr.push(nums2[j])
            j++
    }


    if (storageArr.length % 2 === 0) {
        let median = (storageArr[Math.floor(storageArr.length / 2)] + storageArr[Math.floor(storageArr.length / 2) - 1]) / 2;
        return median;
    } else {
        let median = storageArr[Math.floor(storageArr.length / 2)];
        return median;
    }
    
}



// Better approach 

function better(nums1 , nums2){
    let n = nums1.length;
    let m = nums2.length;
    let totalLength = n + m;
    let isEven = totalLength % 2 === 0;

    let medianIndex = Math.floor(totalLength / 2);

    let i = 0;
    let j = 0;
    let prev, curr;

    while (i + j <= medianIndex) {
        prev = curr;
        if (i < n && (j >= m || nums1[i] <= nums2[j])) {
            curr = nums1[i++];
        } else {
            curr = nums2[j++];
        }
    }

    if (isEven) {
        return (prev + curr) / 2;
    } else {
        return curr;
    }

}


function main(){
    let nums1 = [1,2]
    let nums2 = [3,4]

    let result = better(nums1, nums2)
    console.log(result);
}

main()
 