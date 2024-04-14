// check wheather input is an array or not
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let arr = 'ggg';
// if(toString.call(arr) === '[object Array]') {
//     console.log('arr is array');
// }else{
//     console.log('arr is not array');
// }


// check wheather input is a string or not
// let str = 'ggg';
// let arr = [2,3,4,5,6,7,8,9];
// if(toString.call(str) === '[object String]') {
//     console.log('str is string');
// }else{
//     console.log('str is not string');
// }




// flatten an array 
// function flatten(arr) {

//     let flatternArray = [];
//     for(let i=0 ; i<arr.length ; i++) {
//         if(arr[i] instanceof Array){
//             flatternArray = [...flatternArray, ...flatten(arr[i])];
//         }else{
//             flatternArray.push(arr[i]);
//         }
//     }

//     return flatternArray;

// }
// console.log(flatten([1,2,3,[4,5,6,7,8,9,[5, 6, 7, 8, 9, [5, 6, 7, 8, 9]]]]));