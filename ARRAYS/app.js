let arr = [1, 2, 3, 4, 5];

// let res = arr.map((item, index, arr) => {
//     return item*2
// });

let res = arr.filter((item, index, arr) =>{
    return item%2 === 0;
})

console.log(res, arr);