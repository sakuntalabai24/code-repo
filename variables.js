// for(let i=0; i<=5; i++){
//     let sign='';
//     for(let j=0; j<i; j++){
//         sign+='*';
//     }
//     console.log(sign);
// }


// for(let i=5; i>0; i--){
//     let sign='';
  
// for(let gap=5; gap>i;gap--){
//   sign+=' ';
// }

//     for(let j=0; j<i; j++){
//     sign+='$';
    
//     }
//     console.log(sign);

//  }


//FOR LOOP//
// for(let i=0; i<5; i++){
//     console.log("$moky");
    
// }

//WHILE LOOP//
// let i=0;
// while(i<3){
//     console.log("Golu");
//     i++;
// }

// DO WHILE LOOP//
// let i=1;
// do{
// console.log("Pillluuu");
// i++;
// }while(i<=3);

//FOR IN LOOP//
// let arr=[1,2,3,4,5];
// for(let num of arr ){
//     console.log(num);
// }

//

// let arr=[1,2,3,4,5,6];
// //let arr=[1,2,3];//
// for(let i=0; i<arr.length-1; i+=2){
//     let temp=arr[i];
//     arr[i]=arr[i+1];
//     arr[i+1]=temp;

// }
// console.log(arr);


// let num =5;
// let chain=0;
// while(num!=1){
//     if(num%2==0){
//         let bhag=num/2;
//         chain=bhag;
//         num=bhag;
// }else{
//        let guna= num*3+1;
//        chain=guna;
//        num=guna;
//     }
//     console.log(chain);
    
// }


// let arr=[1,2,3,4,5];
// let T=arr[arr.length-1];
// let c=arr[0];
// for(let i=1; i<arr.length;i++){
//     let T = arr[i];
//     arr[i]=c;
//      c=T;
// }
// arr[0]=T;
// console.log(arr);


// const arr=[1,2,3,4,5];
// let C=3;
// if(C>arr.length){
//     C = C%arr.length;
// }
// let temp=[];
// for(let i=0; i<C; i++){
//     temp[i]=arr[arr.length-C+i];
// }
// for(let i =arr.length-1; i>=C; i--){
//     arr[i]=arr[i-C];
// }
// for(let i=0;i<C; i++){
//     arr[i]=temp[i];
// }
// console.log(arr);

// let num=123;
// let A=num;
// let sum=0;
// let count=0;
// while(num>0){
//     let R=num%10;
//     count+=1;
//     num=Math.floor(num/10);
// }
// while(A>0){
//     let s=A%10;
//     sum+=s**count;
//     A=Math.floor(A/10);
// }
// console.log(sum);

// let arr=[3,-5,2,-7,8,0,1];
// let posum=0;
// let negpro=1;
// let evecount=0;
// let oddcount=0;     

// for(i=0;i<arr.length; i++){
//     if(arr[i]>0){
//         posum+=arr[i];
//     }else if(arr[i]<0){
//         negpro*=arr[i];
//       }

//     if(arr[i]%2!==0 ){
//         oddcount++;
//        }else if(arr[i]>0){
//         evecount++;
   
//     }
    
// }

// console.log(posum);
// console.log(negpro);
// console.log(evecount);
// console.log(oddcount);

// let N=9;
// for(let i=1; i<=N; i++){
//     let isPerfect = false;
//     for(let j=1; j*j<=i; j++){
//         if(j*j===i){
//             isPerfect=true;
//             break;
//         }
//     }
//     if(!isPerfect){
//     console.log(i);
// }
// }



// let a=9;
//    a=7

// const a=4;
// a=3 // TypeError
// var a=9;

// console.log(a);

// let a=2;
// let b=3;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a,b);

// let a;
//a=42; //number
// a="Hello"; //string
//a=true;  //boolean
// a=null; //object
//a=undefined; //undefind
//a=[1,2,3]; //object
//a={name:"smoky", age:25}//
// console.log(typeof a);
//  let a="123";
//  console.log(a);
 

// let a="123";
// let b=123;
// let sub=b-a;   // 0
// console.log(sub);

// let n=999;
// if(n>99&&n<1000){
//     console.log()
// }

// arr=[1,2,3,4,5];
// C=arr[0];
// for(let i=0; i<arr.length;i++){
//     let T=arr[i];
//     arr[i]=C;
//     C=T;
// }
// arr[0]=C;
// console.log(arr);

// const N=50;
// for(let i=0; i<=N; i++){
//     let count=0;
//     for(let j=1; j<=i;j++){
//         if(i%j==0){
//             count++;
//         }
//     }
//     if(count==2){
//         console.log(i);
//     }
// }

//SCOPE;


// function trafficLight(trafficLightColor, num){
// switch(trafficLightColor){
//     case "Red":
//         if(num>=0&&num<15){
//             console.log("Stop");
//         }else{
//             console.log("Invalid input");
            
//         }
//         break;

//         case "Yellow":
//             if(num>15&&num<20){
//                 console.log("Get ready to go");
//             }else{
//                 console.log("Invalid input");
                
//             }
//             break;

//             case "Green":
//                 if(num>20&&num<30){
//                     console.log("Go");
//                 }else{
//                     console.log("Invalid input");
                    
//                 }
//                 break;

//                 default:
//                    console.log("Invalid input");
                   
//             }

//         }
//         let trafficLightColor="Yellow";
//          let num=23;
//          trafficLight(trafficLightColor, num);



// let input=require("readline-sync");
// let a=input.question("Enter your a side:");
// let b=input.question("Enter your b side:");
// let c=input.question("Enter your c side:");
// if(a==b&&b==c){
//     console.log("Equilateral");
// }else if(a==b&&b!==c){
//  console.log("Isosceles" +" △");
// }else if(a!==b&&a==c){
//     console.log("Isosceles"+ " ▽");
// }else if(a!==b&&b==c){
//     console.log("Isosceles"+" ▽");
// }else{
//     console.log("Scalene" + "  ◣ ");
// }

// let input=require("readline-sync");
// let cost=input.question("Enter your price:");
// let discount=0;
// let discountedPrice=0;
// if(cost>1000){
//     discount=cost*10/100;
// }else if(cost>500&&cost<=1000){
//     discount=cost*5/100;
// }else{
//     discount=0;
// }
// discountedPrice=cost-discount;
// console.log(discountedPrice);

// let name="$moky";
// let greeting=`Hello,${name}!`;
// console.log(greeting);

// function sayMyname(){
//     console.log("S");
//     console.log("M");
//     console.log("O");
//     console.log("K");
//     console.log("Y");
    
// }
// sayMyname();

// function addnum(n1, n2){ 
//     // let result=n1+n2;
//     // return result;
// return n1+n2;
// }
// const result=addnum(3,6)
// console.log("Result", result);

// function loginUserMsg(username="jaan"){
//     if(!username){
//         console.log("Babu");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMsg("billy"));

// function multytwo(arr){
// let result=[];
// for(let i=0; i<arr.length; i++){
//     result.push(arr[i]*2);
// }
// return result;
// }

// const number=[1,2,3,4];
// const result=multytwo(number);
// console.log(result);

// let input=require("readline-sync");
// let num1=input.questionInt("Enter num1:");
// let num2=input.questionInt("Enter num2:");
// let oper=input.question("Enter the oprator:");

// function calcNumber(num1,num2,oper){
//     switch (oper) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             return num2 !== 0 ? num2 / num1 : "Division by zero";
//         default:
//             return "Invalid operator";
//     }
// }
// console.log(calcNumber(7,22,"/"))

// function volumeCircle(rad=5){
//     let volume=(4/3)*3.14159265358979323846*(rad)**3;
//     return volume;
// }
// console.log(volumeCircle());

// const flattenArray=(arr)=>{
// if(arr.length===0){
//     return[];
// }
// const firstElement = Array.isArray(arr[0])
// ? flattenArray(arr[0])
// :[arr[0]];
// return firstElement.concat(flattenArray(arr.slice(1)))};

// const nestedArray=[1,[2,[3,4],5],6];
// const flattened=flattenArray(nestedArray);

// console.log(flattened);

// let car = {
//     brand: 'Tesla',
//     model: 'Model S',
//     start: function() {
//       console.log('Car started');
//     }
//   };
//   car.start(); // Output: Car started
//   function add(a,b){
//     return a>b?a:b;
// }
// console.log(add(7, 5));

// OBJECT

// const mySym= Symbol("$")
// const vip={
//  "first":"Papa",
// [ mySym]:"$",
//  second: "Smoky",
//  other: false,

// }
// // Object.freeze(vip);
// // second: "Smoky",
// vip.greeting=function(){
//     console.log("Hello");
// }
//     vip.greeting2=function(){
//         console.log(`Bollo,${this.second}`);
        
// }

// console.log(vip.greeting);
// let book = {
//     title: 'JavaScript Guide',
//     author: 'John Doe',
//     year: "8",
//     read: function() {
//       console.log(`Reading ${this.title}`);
//     }
//   };
//   book.place="premarath";
//   delete book.authorsWife
//    delete book.year
//   console.log(book);

  



// function createPersonObject(name,age,address){
//     return{
//         name: name,
//         age: age,
//         address: address,
//        introduce: function(){
//           return `Hi, my name is ${this.name}. I am ${this.age} Years old and I leave on ${this.address.street},${this.address.city}`;
//         }
//     };
// }

// const person=createPersonObject("Bablu", 32,{street:"23 Abc Street", city:"XYZ"})

// person.address={street: "987 ZXX Street", city:"New City"}
// console.log(person.introduce());

// function createPersonObject()





// const person = {
//     name: 'ram',
//     age: '23',
//     address:{street:'987 ZXX Street', city: 'New City'},

// }
// person.greeting1=function(){
//     return `I am ${this.pername}`;
    
// }
// person .greeting2=function(){
//     return `${this.age} years old`;
// }
// person. greeting3=function(){
//     return `I live on ${this.address.street}`;
// }

// console.log(person.greeting1());
// console.log(person.greeting2());
// console.log(person.greeting3());


// const person = {
//     name: 'ram',
//     age: '23',
//     address:{street:'987 ZXX Street', city: 'New City'},

// }
// person.greeting1=function(){
//     return `I am ${this.pername}`;
    
// }
// person .greeting2=function(){
//     return `${this.age} years old`;
// }
// person. greeting3=function(){
//     return this.address;
// }
// person. greeting4=function(){
//     return {city:this.address.city}
// }


// console.log(person.greeting1());
// console.log(person.greeting2());
// console.log(typeof person.greeting3());
// console.log(typeof person.greeting4());

             
// function createPersonObject(name , age ,address){
//     return{
//         name: name,
//         age: age,
//         address: address,
//         introduce: function(){
//             return `Hi, my  name is ${this. name}. I am ${this.age} years old and I live on ${this.address.street}, ${this. address.city}.`;
//         },
//         celebrateBirthday: function(){
//             this.age++;
//             return `Happy Birthday ${this.name}! You are now ${this.age} years old`;
//         }
//     };
// }
// function listPersonDetails(person){
//     let details="";
//     for(let property in person){
//         if(typeof person[property]!=='function'){
// details+=`${property}: ${JSON.stringify(person[property])}\n`;
//         }

//         }
//         return details;
//     }
// const person1 =createPersonObject("Bablu", 32,{street: "23 Abc Street", city: "XYZ"});
// const person2 =createPersonObject("Smoky", 19,{street: "18 Girija Street", city: "Bstr"});
// console.log(listPersonDetails(person2));


  //  //1D//
  //  let arr=[10,20,30,40];
  //  console.log(arr[1]);

//2D//

// let matrix=[[1,2],[3,4]];
// console.log(matrix[1]);

//3D//
// let smoky=[
//   [
//     [1,2,3],
//     [4,5,6]
//   ],
//   [
// [1,3,5],
// [7,9,11]
//   ]
// ];
// console.log(smoky[1][0]);

//PUSHorPOP//

// let arr=[1,2,3];
// arr.pop()//[1,2]
// arr.push(4);
// console.log(arr);//[1,2,4]

//SHIFTorUNSHIFT//

// let arr=[1,2,3];
// arr.shift();//[2,3]
// arr.unshift(4);
// console.log(arr);

//forEach//
// let arr=[1,2,3];
// arr.forEach((value, index) => {

// })
// console.log(`Index: ${index}, Value: ${value}`)

// console.log(arr);

// SLICE//
// let arr=[1,2,3];
// let b = arr.slice(1);
// console.log(b);

//SPLICE//
// let arr=[1,2,3];
// let b = arr.splice(0,1);
// console.log(b);

// //JOIN//
// let arr=["hey"," jaan"];
// console.log(arr.join(""));

// //SORT//
// let arr=[5,3,6,2];
// arr.sort((a,b)=>a-b);
// console.log(arr);

  // INDEXOF//
  // let num=[1,2,3,4];
  // console.log(num.indexOf(4));
  

  //INCLUDE/
  // let num=[1,2,3,4];
  // console.log(num.includes(0));
  
  // function createShoppingList(){
  //   let shoppingList=[];
 
  //   function addItem(item){
  //     if(item.name && item.quantity){
  //       shoppingList.push(item);
  //       console.log(`${item.quantity} of ${item.name} added`);
  //     }else{
  //       console.log("Invalid item!")
  //     }
  //   }
  //   return {addItem};
  // }
  // const myList= createShoppingList();
  // myList.addItem({ name: "Milk", quantity: 2 });
  // myList.addItem({ name: "Eggs", quantity: 12 });

//   function createShoppingList() {
//     let shoppingList = [];

//     return {
//         addItem(item) {
//             shoppingList.push(item);
//             console.log(`${item.quantity} of ${item.name} added!`);
//         },
//         updateItemQuantity(name, quantity) {
//             let item = shoppingList.find((i) => i.name === name);
//             if (item) {
//                 item.quantity = quantity;
//                 console.log(`${name}'s quantity updated to ${quantity}!`);
//             } else {
//                 console.log(`${name} not found!`);
//             }
//         },
//         removeItem(name) {
//             shoppingList = shoppingList.filter((i) => i.name !== name);
//             console.log(`${name} removed!`);
//         },
//         viewList() {
//             console.log(shoppingList);
//         },
//     };
// }


// const myList = createShoppingList();
// myList.addItem({ name: "Milk", quantity: 2 });
// myList.addItem({ name: "Eggs", quantity: 12 });
// myList.updateItemQuantity("Milk", 3);
// myList.removeItem("Eggs");
// myList.viewList();

// function createShoppingList() {
//   let shoppingList = [];

//   return {
//       addItem(item) {
//           shoppingList.push(item);
//       },
//       checkItem(name) {
//           return shoppingList.some((i) => i.name === name);
//       },
//       sortList() {
//           shoppingList.sort((a, b) => a.name.localeCompare(b.name));
//       },
//       viewList() {
//           console.log(shoppingList);
//       },
//   };
// }


// const myList = createShoppingList();
// myList.addItem({ name: "Milk", quantity: 2 });
// myList.addItem({ name: "Eggs", quantity: 12 });
// myList.addItem({ name: "Apples", quantity: 5 });
// console.log(myList.checkItem("Milk")); // true
// console.log(myList.checkItem("Bananas")); // false
// myList.sortList();
// myList.viewList();


// function createShoppingList() {
//   let shoppingList = [];

//   return {
//       addItem(item) {
//           shoppingList.push(item);
//       },
//       filterByQuantity(threshold) {
//           return shoppingList.filter((i) => i.quantity > threshold);
//       },
//       calculateTotalQuantity() {
//           return shoppingList.reduce((total, item) => total + item.quantity, 0);
//       },
//       viewList() {
//           console.log(shoppingList);
//       },
//   };
// }


// const myList = createShoppingList();
// myList.addItem({ name: "Milk", quantity: 2 });
// myList.addItem({ name: "Eggs", quantity: 12 });
// myList.addItem({ name: "Apples", quantity: 5 });

// console.log(myList.filterByQuantity(3)); // Items with quantity > 3
// console.log(myList.calculateTotalQuantity()); // Total quantity of all items
// myList.viewList();

//STRING//
// let str="HELLO";
// console.log(str.toLowerCase());

// let str="hlwmoto";
// console.log(str.indexOf("t"));

//  let str="hlwmoto";
//  console.log(str.includes("y"));


// let str="hlwmoto";
// console.log(str.search("o"));


// function updateString(str, originalChar, replacedChar){
//    str=str.trim();
//    let updatedStr=str.replace(new RegExp(originalChar ,"g"),replacedChar);
//    return updatedStr;
// }
// let result=updateString("This#is#my#first##code", "#", " ");
// console.log(result);

// function capitalizeWords(str) {
//   let updatedStr = str.split(' ').map(function(word) {
//       return word[0].toUpperCase() + word.slice(1); 
//   }).join(' '); 
//   return updatedStr;
// }

// let result = capitalizeWords("i love india");

// console.log(result); 

// function isPalindrome(str) {

//   let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
// let reversedStr = cleanedStr.split('').reverse().join('');
//  return cleanedStr === reversedStr;
// }

// let result = isPalindrome("Too hot to hoots");
// console.log(result); 

// function compressString(str) {
//   let compressed = ""; 
//   let count = 1; 

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//           count++;
//       } else {
//          compressed += str[i] + (count > 1 ? count : "");
//           count = 1; 
//       }
//   }
//   return compressed;
// }

// let result = compressString("sssssss");
// console.log(result); 

// function caesarCipher(str, shift) {
//   let encrypted = ""; 

//   for (let i = 0; i < str.length; i++) {
//       let char = str[i];

//       if (char >= "a" && char <= "z") {
//           let newChar = String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
//           encrypted += newChar;
//       } else if (char >= "A" && char <= "Z") {

//           let newChar = String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
//           encrypted += newChar;
//       } else {
//           encrypted += char;
//       }
//   }
//    return encrypted; 
// }

// let result = caesarCipher("I am a student", 2);
// console.log(result); 


// //DATE//
// let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());



// let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now())/1000);

// let newDate=new Date();
// console.log(newDate.getMonth());

// console.log(newDate.getDay());

// function addDaysToDate(date, days) {
  
//   let resultDate = new Date(date);
//  resultDate.setDate(resultDate.getDate() + days);
//    const year = resultDate.getFullYear();
//   const month = (resultDate.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based, so add 1
//   const day = resultDate.getDate().toString().padStart(2, '0');

//   return `${year}-${month}-${day}`;
// }


// const today = new Date('2023-10-05'); 
// const daysToAdd = 10;

// const newDate = addDaysToDate(today, daysToAdd);

// console.log(newDate); 

// function isWeekend(date) {
//   const dayOfWeek = date.getDay();
// return dayOfWeek === 0 || dayOfWeek === 6;
// }

// const date1 = new Date('2023-10-05'); 
// console.log(isWeekend(date1)); 

// function daysUntilBirthday(birthdayString) {
//   const birthday = new Date(birthdayString);

//   const today = new Date();

//   birthday.setFullYear(today.getFullYear());

//   if (today > birthday) {
//     birthday.setFullYear(today.getFullYear() + 1);
//   }

//   const difference = birthday - today;
//   const daysUntil = Math.floor(difference / (1000 * 60 * 60 * 24));

//    hours in 24-hour format (0-23)
  // const hours12 = hours24 % 12 || 12; // Get hours in 12-hour format (1-12)return daysUntil;
// }


// const birthdayString = '2024-12-31';
// const daysRemaining = daysUntilBirthday(birthdayString);

// console.log(daysRemaining);

// function customDateFormatter(date, format) {
//   const fullYear = date.getFullYear();
//   const shortYear = fullYear.toString().slice(2); 
//   const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
//   const day = date.getDate().toString().padStart(2, '0'); 
//   const hours24 = date.getHours();
//   const hours12 = hours24 % 12 || 12; 
//   const minutes = date.getMinutes().toString().padStart(2, '0'); 
//   const seconds = date.getSeconds().toString().padStart(2, '0'); 
//   const ampm = hours24 < 12 ? 'AM' : 'PM'; 

//   return format
//     .replace('YYYY', fullYear)
//     .replace('YY', shortYear)
//     .replace('MM', month)
//     .replace('DD', day)
//     .replace('HH', hours24.toString().padStart(2, '0')) 
//     .replace('hh', hours12.toString().padStart(2, '0')) 
//     .replace('mm', minutes)
//     .replace('ss', seconds)
//     .replace('A', ampm);
// }

// const date = new Date();
// const format = 'YYYY-MM-DD HH:mm:ss A'; 
// const formattedDate = customDateFormatter(date, format);

// console.log(formattedDate);


//MATH OBJECT//

// function getCircumference(radius) {
//   if (radius <= 0) {
//       return "Radius must be a positive number.";
//   }
//   return 2 * Math.PI * radius;
// }

// const radius = 1; 
// const circumference = getCircumference(radius);
// console.log(` ${circumference.toFixed(2)} `);


// function getDistance(x1, y1, x2, y2) {
//   const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//   return distance;
// }

// const x1 = 1, y1 = 1, x2 = 4, y2 = 5;
// const distance = getDistance(x1, y1, x2, y2);
// console.log(` ${distance.toFixed(2)} `);


// function rollDice() {
//   return Math.floor(Math.random() * 6) + 1; 
// }

// function playGame(targetScore) {
//   let player1Score = 0;
//   let player2Score = 0;

//   while (player1Score < targetScore && player2Score < targetScore) {
//       const player1Roll = rollDice();
//       const player2Roll = rollDice();

//       console.log(`Player 1 rolls: ${player1Roll}`);
//       console.log(`Player 2 rolls: ${player2Roll}`);

//       if (player1Roll > player2Roll) {
//           player1Score++;
//           console.log("Player 1 wins this round!");
//       } else if (player2Roll > player1Roll) {
//           player2Score++;
//           console.log("Player 2 wins this round!");
//       } else {
//           console.log("It's a tie this round!");
//       }

//       console.log(`Scores -> Player 1: ${player1Score}, Player 2: ${player2Score}\n`);
//   }

//   if (player1Score === targetScore) {
//       console.log("Player 1 wins the game!");
//   } else {
//       console.log("Player 2 wins the game!");
//   }
// }

// let arr=[1,2,3,4,5];
// let k=3;
// if(k>arr.length){
//   k=k%arr.length;
// }
//  let temp=[];
//  for(let i=0; i<k; i++){
//   temp[i]=arr[arr.length-k+i];
//  }
//  for(let i=arr.length-1; i>=k; i--){
//   arr[i]=arr[i-k];
//  }
//  for(let i=0; i<k; i++){
//   arr[i]=temp[i];
//  }

//  console.log(arr);

// let n=5;
// let sum=0;
// let t=1;
// for(let i=1;i<=n;i++){
//   t*=i; 
//   sum+=t;
// }

// console.log(sum);


// let sum =a=>a*3;
// console.log(sum(4));


// let users = [
//   { id: 1, name: 'Alice', email: 'alice@example.com' },
//   { id: 2, name: 'Bob', email: 'bob@example.com' },
//   { id: 3, name: 'Charlie', email: 'charlie@example.com' }
// ];

// // Create
// let newUser = { id: 4, name: 'David', email: 'david@example.com' };
// users.push(newUser);

// // Read
// let user = users.find(u => u.id === 2);  // Find user with id 2
// console.log(user);  // { id: 2, name: 'Bob', email: 'bob@example.com' }

// // Update
// let userToUpdate = users.find(u => u.id === 2);
// if (userToUpdate) {
//   userToUpdate.name = 'Robert';  // Update name
//   userToUpdate.email = 'robert@example.com';  // Update email
// }

// // Delete
// let indexToDelete = users.findIndex(u => u.id === 3);  // Find index of user with id 3
// if (indexToDelete !== -1) {
//   users.splice(indexToDelete, 1);  // Remove the user at that index
// }

// console.log(users);

