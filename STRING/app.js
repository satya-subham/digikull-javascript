// let str = "He is a good person. he lives in India";

// let result = str.slice(5, 12);
// let result = str.substring(5, 12);
// let result = str.replace("He", "She");
// let result = str.replace(/He/ig, "She");
// let result = str.toUpperCase()
// let result = str.toLowerCase()
// let result = str.split('-');

// let str = "Today is a beautiful day. Let us enjoy today and not worry about tomorrow! Today will not repeat itself";

// let result = str.split(" ");

// for(let i=0; i<result.length; i++){
//     if(result[i].includes("Today")){
//         console.log(i)
//     }
// }


// let str = "satya";
// let rev = "";
// for(let i=0; i<str.length; i++){
//     let ch = str[i];
//     rev = ch+rev;
//     console.log(rev);
// }
// if(rev === str){
//     console.log("Pallindrome");
// }else{
//     console.log("Not Pallindrome");
// }
// let rev = str.split("").reverse().join("");
// if(str === rev){
//     console.log("Pallindrome");
// }else{
//     console.log("Not a palindrome");
// }
// console.log(str);



// let arr = [1, 2, 3, 4, 5, 6, 7];

// for(let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i]*2
// }
// console.log(arr);


let arr = [1, 2, 3, 4, 5, 6, 7, -1];
let min = arr[0];
let max = arr[0];
for(let i = 0; i < arr.length; i++) {
  if(arr[i] < min) {
    min = arr[i];
  }
  if(arr[i] > max) {
    max = arr[i];
  }
}
console.log(min, max);