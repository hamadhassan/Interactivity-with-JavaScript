/*alert("Hello World");*/
/*document.getElementById('test').innerHTML = "Hello World";*/
/*console.log("Hello World");*/
/*function enterName(){
    var name=prompt("Enter your name");
    document.write("<h1>"+name+"</h1>");
    document.write(document.baseURI+"<br>");
    document.write(document.title+"<br>")
    console.log(name);
    return name;
}
var usernmae=enterName();
document.write("<h2>"+usernmae+"</h2>");*/
function first(){
    document.getElementById("change").innerHTML="First Button is clicked";
}
function second(){
document.getElementById("change").innerHTML="Second Button is Clicked";
}
var fruits=["banana","orange","apple","mango"];

function loadFruits(){
document.getElementById("fruits").innerHTML=fruits;
}

function myFunction(){
    var fruit=prompt("What is your favorite fruit?");
    if(fruit.length!=0){
        fruits[fruits.length]=fruit;
        document.getElementById("fruits").innerHTML=fruits;
    }
    else{
        alert("The item is not added");
    }
    
}
var grades=[12,12,12,12,12,12];
var sum=0;
if(grades.length!=0){
    for(j=0;j<grades.length;j++){
        sum+=grades[j];
    }
    document.write(sum/grades.length);
}