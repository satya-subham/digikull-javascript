//count number of digits in the number
// function count(n){
//     let count = 0;
//     while(n>=1){
//         n = (n - (n%10)) / 10;
//         count++;
//     }
//     console.log(count);
// }
// count(762857)

// function count(n){
//     let count = 0;
//     while(n>=1){
//         n = Math.floor(n/10);
//         count++;
//     }
//     console.log(count);
// }
// count(762857)




// check number is palindrome or not
// function isPalindrome(n) {
//     let str = "";
//     while(n >= 1){
//         let ch = n%10;
//         str += ch;
//         n = (n - (n%10)) / 10;
//     }
//     console.log(str);
//     str = parseInt(str);
//     if(n == str){
//         console.log("palindrome");
//     }else{
//         console.log("not a palindrome");
//     }
// }
// isPalindrome(747)

// function isPalindrome(n) {
//     let reversed = 0;
//     let temp = n;
//     while(temp >= 1){
//         reversed = reversed*10 + temp%10;
//         temp = Math.floor(temp/10);
//     }

//     if(n === reversed){
//         console.log(`${n} is a palindrome number`);
//     }else{
//         console.log(`${n} is not a palindrome number`);
//     }
// }
// isPalindrome(7473)


// check number is prime number or not
function isPrime(num){
    let prime = true;
    for(let i=2; i<num; i++){
        if(num % i == 0){
            prime = false;
        }
    }
    if(prime){
        console.log(`${num} is prime`);
    }else{
        console.log(`${num} is not prime`);
    }
}
isPrime(9)