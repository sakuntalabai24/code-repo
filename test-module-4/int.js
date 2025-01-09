
let int1=6;
let int2=8;
let int3=4;
if(int1==int2&&int2==int3){
    console.log("All Equal");
}else if(int1==int2&&int2!=int3){
    console.log("Two Equal");
}else if(int1==int3&&int1!=int2){
    console.log("Two Equal");
}else if(int2==int3&&int1!=int2){
    console.log("Two Equal");
}
else{
    function larger(a,b,c){
        let larg =[a,b,c];
        larg.sort((x,y) => y-x);
        return larg[0];
    }
    console.log(larger(int1,int2,int3));
}
