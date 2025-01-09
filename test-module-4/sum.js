
let arr1=[1,3,5,7];
let arr2=[7,9,11];
let sum=0;
for(let i=0; i<arr1.length;i++){
    for(let j=0; j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
            sum+=arr1[i];
        }
    }
}
console.log(sum);