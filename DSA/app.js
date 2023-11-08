// function mergeSort(arr, start, end) {
//   if(start >= end) return;
//   let mid = Math.floor((start+end)/2);
//   mergeSort(arr, start, mid);
//   mergeSort(arr, mid+1, end);
//   merge(arr, start, mid, end);
// }

// const arr = [1, 3, 0, 4, 5, 1]
// mergeSort(arr, 0, arr.length-1);
// console.log(arr);

// function merge(arr, start, mid, end) {
//   let resArray = [];
//   let len1 = mid - start + 1;
//   let len2 = end - mid;
//   let i = 0, j = 0;
//   while(i<len1 && j < len2) {
//     let elementA = arr[start+i];
//     let elementB = arr[mid+1+j];
//     if(elementB < elementA) {
//       resArray.push(elementB);
//       j++;
//     }
//     else {
//       resArray.push(elementA);
//       i++;
//     }
//  }

//   while(i<len1) {
//     resArray.push(arr[start+i]);
//     i++;
//   }

//   while(j<len2) {
//     resArray.push(arr[mid+1+j]);
//     j++;
//   }

 
//   for(let i=start; i<=end; i++) {
//     arr[i] = resArray[i-start];
//   }

// }



// ========================== ANOTHER FUNCTIONS =========================

function mergeSort(arr){
  if(arr.length <= 1) return arr;

  let mid = Math.floor(arr.length/2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right){
  let sortedArr = [];

  while (left.length && right.length){
    if(left[0] < right[0]) sortedArr.push(left.shift());
    else sortedArr.push(right.shift());
  }

  return [...sortedArr, ...left, ...right];
}

console.log(mergeSort([1, 3, 0, 4, 5, 1]))