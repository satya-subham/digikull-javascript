// function partition(arr, low, high) {
//   let pivot = arr[high];
//   let i = low - 1;

//   for (let j = low; j <= high - 1; j++) {
//     if (arr[j] < pivot) {
//       i++;
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }

//   [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
//   return i + 1;
// }

// function quickSort(arr, low, high) {
//   if (low < high) {
//     let pi = partition(arr, low, high);

//     quickSort(arr, low, pi - 1);
//     quickSort(arr, pi + 1, high);
//   }
// }

// let arr = [10, 7, 8, 9, 1, 5];
// let N = arr.length;

// quickSort(arr, 0, N - 1);
// console.log("Sorted array:");
// console.log(arr);
// console.log(arr.join(" "));



// ========================================== ANOTHER ALGORITHM =================================

function quickSort(arr){
  if (arr.length <= 1) return arr;
  
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    }else {
      right.push(arr[i])
    };
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([10, 7, 8, 9, 1, 4, 5, 2, 6, 3]));


function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([0, 2, 1, 2, 0]))