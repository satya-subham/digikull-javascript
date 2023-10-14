function mergeSort(arr, start, end) {
  if(start >= end) return;
  let mid = Math.floor((start+end)/2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid+1, end);
  merge(arr, start, mid, end);
}
function merge(arr, start, mid, end) {
  let resArray = [];
  let len1 = mid - start + 1;
  let len2 = end - mid;
  let i = 0, j = 0;
  while(i<len1 && j < len2) {
    let elementA = arr[start+i];
    let elementB = arr[mid+1+j];
    if(elementB < elementA) {
      resArray.push(elementB);
      j++;
    }
    else {
      resArray.push(elementA);
      i++;
    }
 }

  while(i<len1) {
    resArray.push(arr[start+i]);
    i++;
  }

  while(j<len2) {
    resArray.push(arr[mid+1+j]);
    j++;
  }

 
  for(let i=start; i<=end; i++) {
    arr[i] = resArray[i-start];
  }

}
const arr = [1, 3, 0, 4, 5, 1]
mergeSort(arr, 0, arr.length-1);
console.log(arr);