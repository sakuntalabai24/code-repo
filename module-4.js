
// Q.4-//
// function calcFactor(n){
//     let count=0;
//     for(let i=0; i<n; i++){
//         if(n%i==0){
//             count+=1;
//         }

//     }
//     return count;
// }
// console.log(calcFactor(8));

//Q.5-
// function reverseStr(str){
//     return str.split("").reverse().join("")
// }
// let string="sonu";
// let reversed=reverseStr(string);
// console.log(reversed);

//Q.6-


// function reverseStr(str){
//     return str.split("").reverse().join("")
// }
// let string="wow";
// let reversed=reverseStr(string);
// if(reversed==string){
// console.log("Yes, it is palindrome")
// }else{
//     console.log("No, it is not palidrome!")
// }

//Q.7-
// function findLength(str){
//     return str.length;
// }
// console.log(findLength("jaduwali"))

//Q.8-

// function findVowel(str){
//    let arr=["a","e","i","o","u"];
//    let count=0;
//    for(let i=1; i<arr.length; i++){
//     for(let j=1; j<str.length;j++){
//        if(arr[i]==str[j]){
//         count+=1;
//        }
//      }
//      if(count>0){
//         return ("Total vowel"+count);
//        }else{
//         return ("Not found vowel");
//       }
//    }
// }
// console.log(findVowel("juice"));

//Q.9

//Q.10-
// let arr=[1,3,4,5,6,8];
// for(let i=0; i<arr.length-1; i++){
//     if(arr[i]<arr[i+1]){
//         console.log("Yes");
//     }else{
//         console.log("No");
        
//     }
// }



// let int1=6;
// let int2=8;
// let int3=4;
// if(int1==int2&&int2==int3){
//     console.log("All Equal");
// }else if(int1==int2&&int2!=int3){
//     console.log("Two Equal");
// }else if(int1==int3&&int1!=int2){
//     console.log("Two Equal");
// }else if(int2==int3&&int1!=int2){
//     console.log("Two Equal");
// }
// else{
//     function larger(a,b,c){
//         let larg =[a,b,c];
//         larg.sort((x,y) => y-x);
//         return larg[0];
//     }
//     console.log(larger(int1,int2,int3));
// }

// let n=5;
// let i=1;
// let sumEven=0;
// let sumOdd=0;
// while(i<=n){
//     if(i%2==0){
//         sumEven+=i**2;
//     }else{
//         sumOdd+=i**3;
//     }
//     i++;
// }
// console.log(sumEven + sumOdd);



// let arr=[3,-5,2,-7,8,0,1];
// let poSum=0;
// let negSum=1;
// let coEvent=0;
// let coOddint=0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>0){
//         poSum+=arr[i];
//         if(arr[i]%2==0){
//             coEvent+=1;
//         }
//         coOddint+=1;
//     }
//     if(arr[i]<0){
//     negSum*=arr[i];
//     }
// }
// console.log(poSum);
// console.log(negSum);
// console.log(coEvent);
// console.log(coOddint);



// let time = 1;

// if(time>0&&time<=2){
//     console.log(30*time);
// }else if(time>2&&time<=5){
//     console.log(50+(20*(time-2)));
// }else{
//     console.log(25+20+(15*(time-5)))
// }

// let A=28;
// let sum=0;
// let i=0;
// while(i<A){
//     if(A%i==0){
//        sum+=i;
//        i++;
//     }else{
//     i++;
//     }

// }
// if(sum==A){
//     console.log("Perfect");
//   }else{
//   console.log("Not Perfect");
// }

// let arr1=[1,3,5,7];
// let arr2=[7,9,11];
// let sum=0;
// for(let i=0; i<arr1.length;i++){
//     for(let j=0; j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             sum+=arr1[i];
//         }
//     }
// }
// console.log(sum);