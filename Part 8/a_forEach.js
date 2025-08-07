// "ForEach" Example
let arr=[10,20,30,40,50,60,70,80,90,100]
//Firstly by using function
arr.forEach(function(marks){
    console.log(marks)
})
// using Arrow Function
arr.forEach((marks)=>{
    console.log(marks);
})
// Now by using object
let clas=[{
    name:"shardha",
    age:42
},{
    name:"shivam",
    age:67
},{
    name:"akansha",
    age:22
}]
clas.forEach(function(students){
    console.log(students.name)
})
