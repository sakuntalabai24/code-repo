//OBJECT//

// let friend = {
//     height: "tall",
//     weight: "thin",
//     color: "dusky",
//     age: 19,
//     look: "cute"

// }
// delete friend.height
// console.log(friend);
// console.log(Object.keys(friend));
// console.log(Object.values(friend));

//ARRAY//

// let tree=["Banyan", "Pine", "Mango"]; 
// tree.push("Neem");
// tree.pop();
// console.log(tree);

// let number=[2,4,6,8,10];
// number.shift();
// number.unshift(0);
// console.log(number);

// let myFriend=["Srishti","Enamy", "Aman", "Khushbu" ];
// myFriend.splice(2 , 4);
// let arr=myFriend.slice(2,3);
// console.log(arr);

// let arr=[1,2,3,"arr",4];
// arr.splice(2,2, "ka");// remove add and replace
// console.log(arr);

//SRING//

// let sbd="SmokyMy";
// let ob="jan";
// let sb="jun";
// console.log(sbd.length);
// console.log(sbd.toUpperCase());
// console.log(sbd.toLowerCase());
// console.log(sbd.charAt(5));
// console.log(sbd.charCodeAt(2)); //it will unicode unicode
// console.log(sbd.concat(ob,sb));
// console.log(sbd.includes("y"));
// console.log(sbd.indexOf("m"));
// console.log(sbd.slice(2,-3));
// console.log(sbd.substring(0,1));
// console.log(sbd.replace("m", "M"));
// console.log(sbd.split(""));
// console.log(sbd.trim());
// console.log(sbd.repeat(3));

//DATE OBJECT//
// let today= new Date();
// console.log(today.getFullYear());
// console.log(today.getMonth());
// console.log(today.getDate());
// console.log(today.getDay());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());
// console.log(today.getMilliseconds());
// console.log(today.toLocaleDateString());

//MATH OBJECT//

// console.log(Math.abs(9));
// console.log(Math.ceil(1.0));
// console.log(Math.round(3.5));
// console.log(Math.floor(6.5));
// console.log(Math.trunc(3.5));
// console.log(Math.pow(5,3));
// console.log(Math.sqrt(25));
// console.log(Math.cbrt());
// console.log(Math.random());
// console.log(Math.PI);




// let a=(3>4)?"True": "No";
// console.log(a);

// let num=0;
// let number=num>0?1:num<0?-1:0;
// switch(number){
//     case 1:
//         console.log('positive');
//         break;
//      case -1:
//             console.log('negative');
//             break;
//      default:
//         console.log('zero');``
        
        
// }

// let l=10;
// let arr=[];
// for(let i=1; i <= l; i++){
//     if(i%2==0){
//     arr.push(i);
// }
// }
// console.log(arr);

// function findSecMax(a,b,c){
//     let secMax=(a>b&&a<c)||(a>c&&a<b)? a:
//                (b>a&&b<c)||(b>c&&b<a)? b:
//                 c;
//          return secMax;
// }
// console.log(findSecMax(-2,6,-1));

// function findThirdMax(a,b,c,d){
//     let numbers=[a,b,c,d];
//              numbers.sort((x,y)=>y-x);
//              return numbers[2] ;  
// }

// console.log(findThirdMax(3,5,10,9));


