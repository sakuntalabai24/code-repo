
let A=28;
let sum=0;
let i=0;
while(i<A){
    if(A%i==0){
       sum+=i;
       i++;
    }else{
    i++;
    }

}
if(sum==A){
    console.log("Perfect");
  }else{
  console.log("Not Perfect");
}