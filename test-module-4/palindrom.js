

function reverseStr(str){
    return str.split("").reverse().join("")
}
let string="wow";
let reversed=reverseStr(string);
if(reversed==string){
console.log("Yes, it is palindrome")
}else{
    console.log("No, it is not palidrome!")
}
