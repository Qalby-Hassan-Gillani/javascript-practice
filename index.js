//console.log("hello world")
//console.log("hello world")
//var Myname;
//Myname="Rida nawaz"
//console.log(Myname)
//var num1;
//var num2;
//var num3;
//num1 = 2;
//num2 = 3;
//num3= num1 + num2;
//console.log(num3)

//var nullvalues = null;
//console.log(typeof nullvalues)

//var underfinedvalues;
//console.log(typeof underfinedvalues)

//var value = 55566666666666n;
//console.log(typeof value)


//operators in javascript

//var a = 10;
//var b = 20;
//var c = b;
//var d = a;
//var e = a+b+c+d;
//console.log(e)

//consitional operators

//var a =10;
//var b = 34;
//if(a>b){
    //console.log("hello everyone its me here")
//}
//else{
    //console.log("hello bro you are wrong")
//}


//logical operators

var a =10;
var b = 50;
if(a>b && a<b){
    console.log("print hellow mister")
}

var a =10;
var b = 50;
if(a>b || a<b){
    console.log("print hellow mister")
}

var a =10;
var b = 50;
if(a != b){
    console.log("hello boy enjoying coding?")
}


function myfun(c){
    console.log("Coding" +c)
}
myfun("rida");

//array and object

var user = {
    name : {
        fname:"rida",
        lname: "nawaz",
    },
    age:25,
    location : true,
};

console.log(user.name.fname);


//for loop
//for(var value = 0; value <10; value++){
    //console.log(value)
//}
var value = 0;
while(value <10){
    console.log(value);
    value++;
}