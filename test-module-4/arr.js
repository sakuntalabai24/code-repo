
let arr=[3,-5,2,-7,8,0,1];
let poSum=0;
let negSum=1;
let coEvent=0;
let coOddint=0;
for(let i=0; i<arr.length; i++){
    if(arr[i]>0){
        poSum+=arr[i];
        if(arr[i]%2==0){
            coEvent+=1;
        }
        coOddint+=1;
    }
    if(arr[i]<0){
    negSum*=arr[i];
    }
}
console.log(poSum);
console.log(negSum);
console.log(coEvent);
console.log(coOddint);

