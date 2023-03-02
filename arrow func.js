// a. odd numbers

//var odd_num = (arr) => {
// let odd =[];
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2){
//         odd.push(arr[i])
//     }
// }
// return odd;
//}
//odd_num([4,1,9,8,24,5,62,38,17,15,22])

// output
// [1, 9, 5, 17, 15]




// b. strings to title caps

//var string = (str) => {
//    let arr=[];
//    for(i=0;i<str.length;i++){
//    let str2;
//      str2 = str[i].charAt(0).toUpperCase();
//      arr.push(str2.concat(str[i].slice(1,)));
//    }
//  return arr;
//}
//string(["hi","friend","how","are","you"])

// output
// ['Hi', 'Friend', 'How', 'Are', 'You']




// c. sum of numbers in an array

//var add = (arr) => {
//  let sum=0;
//  for(i=0;i<arr.length;i++){
//      sum = sum + arr[i]; 
//  }
//  return sum;
//}
//add([25,31,8,64,17,20])

// output
// 165




// d. prime numbers in an array

//var prime = (arr) => {
//let arr2 = [];
//  for(i=0;i<arr.length;i++){
//      let c = 0;
//   for(j=2;j<=arr[i];j++){
//       if(arr[i]%j==0){
//         c = c+1;
//       } 
//   }
//   if(c==1){
//       arr2.push(arr[i]);
//   }
// }
// return arr2;
//}
//prime([2,3,8,13,36,47,54,89,62,34,61,23])

// output
// [2, 3, 13, 47, 89, 61, 23]




// e. palindromes in an array

//var palin = (arr) => {
//  let arr1 = [];
//  let palindrome=[];
//  
//  for(i=0;i<arr.length;i++){
//      let str='';
//      str = arr[i].split('').join('');
//      let str2 ='';
//     for(j=str.length-1;j>=0;j--){
//        str2 = str2+str[j];
//     }
//     arr1.push(str2);
//     if(arr[i]==arr1[i]){
//         palindrome.push(arr[i]);
//     }
//  }
//  return palindrome;
//}
//palin(["madam","yes","wow","bye","rotor","malayalam","wood"])

// output
// ['madam', 'wow', 'rotor', 'malayalam']