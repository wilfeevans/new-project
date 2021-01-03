console.log("Hello");
//alert("yahoo file open");

// about variables

var char="wilfred";
console.log(char);
//document.getElementById('sometext').innerHTML='sample test';
//var age=prompt('What is your age');
//document.getElementById('sometext').innerHTML=age;

var num1=10;
//var num2=10;
//console.log(num1+num2);

num1+=20;
num1++;
console.log(num1);


function greeting()
{
var name= prompt("What is your name?");
var result= "Hello!"
console.log(result + name);

}
greeting();

function func(n1,n2)
{

var total=n1+n2;
console.log(total);

}

func(20,30);


function greet(myname)
{

console.log("Hello!" + myname);

}

var name=prompt("what is your name?");
greet(name);



/* var n=0;

while(n<100)
{
 n = n+1;
 console.log(n);

}
*/

for(let n=0; n<=100;n++)
{
console.log(n);

}

//Data types
let number= 100; // number
let names="wilfred"; //string
let truth=false; //boolean
let name1=null; 
let name2;
let name3={"first_name" : 'wilfred', "last_name" :'antony', "age" : 27};//object 
let grocery=['apple', 'mango', 'orange']; // array


//String in java script

let fruit="apple";
let morefruit="mango\guava";


console.log(fruit.length);
console.log(fruit.replace("app",'123'));
console.log(fruit.slice(2,3));
console.log(fruit.indexOf(2));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.split(','));
console.log(fruit.split(""));
console.log(fruit[2]);
console.log(fruit.charAt(2));










