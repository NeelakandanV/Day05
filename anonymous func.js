// a. odd or even

//anonymous function

//var number = function (num){
//    let result;
//    if(num%2==0){
//        result = `even`;
//    }
//    else{
//        result = `odd`;
//    }
//    return result;
//}
//number(21)

// output
// odd


// IIFE

//(function (num){
//    let result;
//    if(num%2==0){
//        result = `even`;
//    }
//    else{
//        result = `odd`;
//    }
//    return result;
//})
//(208)

// output
// even





// b. strings to title caps

// Annymous function

//var string = function (str){
//    let arr=[];
//  for(i=0;i<str.length;i++){
//      let str2;
//      str2 = str[i].charAt(0).toUpperCase();
//      arr.push(str2.concat(str[i].slice(1,)));
//  }
//  return arr;
//}
//string(["hi","friend","how","are","you"])

// output
// ['Hi', 'Friend', 'How', 'Are', 'You']


// IIFE

//(function (str){
//    let arr=[];
//  for(i=0;i<str.length;i++){
//      let str2;
//      str2 = str[i].charAt(0).toUpperCase();
//      arr.push(str2.concat(str[i].slice(1,)));
//  }
//  return arr;
//})
//(["hi","friend","how","are","you"])

// output
// ['Hi', 'Friend', 'How', 'Are', 'You']




// c. sum of numbers in an array

// Anonymous function

//var add = function(arr){
//  let sum=0;
//  for(i=0;i<arr.length;i++){
//      sum = sum + arr[i]; 
//  }
//  return sum;
//}
//add([25,31,8,64,17,20])

// output
// 165

// IIFE

//(function(arr){
//    let sum=0;
//    for(i=0;i<arr.length;i++){
//        sum = sum + arr[i]; 
//    }
//    return sum;
//  })
//  ([12,5,3,18,62,46])

// output
// 146




// d. prime numbers in an array

// Anonymous function

//var prime = function (arr){
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


// IIFE

//(function (arr){
//  let arr2 = [];
//    for(i=0;i<arr.length;i++){
//        let c = 0;
//     for(j=2;j<=arr[i];j++){
//         if(arr[i]%j==0){
//           c = c+1;
//         } 
//     }
//     if(c==1){
//         arr2.push(arr[i]);
//     }
//   }
//   return arr2;
//  })
//([8,13,54,89,62,12,34,61,23,72,19])

// output
//  [13, 89, 61, 23, 19]




// e. palindromes in an array

// Anonymous function

//let palin = function (arr){
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
//palin(["madam","yes","wow","bye"])

// output
// ['madam', 'wow']


// IIFE

//(function (arr){
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
//})
//(["madam","yes","wow","bye","rotor","malayalam","wood"])
  
// output
// ['madam', 'wow', 'rotor', 'malayalam']




// f. median of two sorted arrays

// Anonymous function

//let mid = function(arr1,arr2){
//    if(arr1.length==arr2.length){
//        let arr3 = arr1.concat(arr2);
//        let arr = arr3.sort((a,b) =>(a-b));
//        let median = ((arr[(((arr.length)/2)-1)] + arr[((arr.length)/2)]) /2);
//        return Math.round(median);
//    }       
//}
//mid([2,48,32,8,26],[5,14,21,7,19])

// output 
// 17


// IIFE


//(function(arr1,arr2){
//    if(arr1.length==arr2.length){
//        let arr3 = arr1.concat(arr2);
//        let arr = arr3.sort((a,b) =>(a-b));
//        let median = ((arr[(((arr.length)/2)-1)] + arr[((arr.length)/2)]) /2);
//        return Math.round(median);
//    }       
//})
//([41,52,6.3,25],[31,2,81.2,43])

// output
// 36




// g. duplicates from an array

// Anonymous function

//let duplicate = function(arr){
//    let obj={};
// let arr1 =[];
// for(let i of arr){
//     if(obj[i]){
//     obj[i] = obj[i]+1;
//     }
//     else{
//         obj[i]=1;
//     }
// }
// for(let i of Object.keys(obj)){
//     if(obj[i]==1){
//     arr1.push(parseInt(i));
//     }
// }
// return arr1;
//}
//duplicate([2,2,6,3,7,2,4,14,2,14,6,81,9,7,2,15,9])

// output
// [3, 4, 15, 81]


// IIFE

//(function(arr){
//let obj={};
// let arr1 =[];
// for(let i of arr){
//     if(obj[i]){
//     obj[i] = obj[i]+1;
//     }
//     else{
//         obj[i]=1;
//     }
// }
// for(let i of Object.keys(obj)){
//     if(obj[i]==1){
//     arr1.push(parseInt(i));
//     }
// }
// return arr1;
//})
//([6,7,4,14,2,14,4,6,81,9,81,7,15,9])

// output
// [2, 15]



// h. array rotation

// Anonymous function

//var arr_rot = function(arr,k){
// let A = arr.length-k;
// let str1=[];
// let str2=[];
// if(k<=arr.length){
//    
//     for(j=arr.length-1;j>=A;j--){
//      str2.unshift(arr[j]);
//     }
//     for(i=0;i<A;i++){
//      str1.push(arr.shift());
//     }
// }
//  return str2.concat(str1)
//}
//arr_rot([4,1,5,3,8,6,17,23,34],4)

// ouput
// [6, 17, 23, 34, 4, 1, 5, 3, 8]


// IIFE

//(function(arr,k){
//    let A = arr.length-k;
//    let str1=[];
//    let str2=[];
//    if(k<=arr.length){
//       
//        for(j=arr.length-1;j>=A;j--){
//         str2.unshift(arr[j]);
//        }
//        for(i=0;i<A;i++){
//         str1.push(arr.shift());
//        }
//    }
//     return str2.concat(str1)
//   })
//   ([4,1,5,3,8,6,17,23,34,85,41,29,92,14,37],7)

// output
// [34, 85, 41, 29, 92, 14, 37, 4, 1, 5, 3, 8, 6, 17, 23]