let n=5;
let i=1;
let sumEven=0;
let sumOdd=0;
while(i<=n){
    if(i%2==0){
        sumEven+=i**2;
    }else{
        sumOdd+=i**3;
    }
    i++;
}
console.log(sumEven + sumOdd);
