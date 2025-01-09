
function findVowel(str){
   let arr=["a","e","i","o","u"];
   let count=0;
   for(let i=1; i<arr.length; i++){
    for(let j=1; j<str.length;j++){
       if(arr[i]==str[j]){
        count+=1;
       }
     }
     if(count>0){
        return ("Total vowel"+count);
       }else{
        return ("Not found vowel");
      }
   }
}
console.log(findVowel("juice"));