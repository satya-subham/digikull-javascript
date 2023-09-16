// for(let i=1; i<=10; i++) {
//     console.log(2,"x",i,"=",2*i)
// }


// let num = 24;
// if(num % 2 == 0) {
//     console.log("Even")
// }else {
//     console.log("Odd");
// }


// let arr = [];
// for(let i = 1; i <= 100; i++) {
//   if(i % 2 === 0) {
//     arr.push(i);
//   }
// }

// let num = 1;
// while( num <= 100 ) {
//     if(num % 2 === 0) {
//         arr.push(num);
//     }
//     num++;
// }
// console.log(arr)



// let num = 23;
// let isPrime = true;
// for(let i=2; i<num; i++) {
//     if(num % i === 0) {
//       isPrime=false;
//     }
// }
// if(isPrime) {
//     console.log("Prime Number");
// }else{
//     console.log("Not A Prime Number");
// }




let num = 5;

for(let i=1; i<=num; i++) {
    let str = "";
    for(let j=1; j<=i; j++) {
        str+="*"
    }
    console.log(str);
}