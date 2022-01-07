const people = [
{
    name: "Sam",
    age: 30,
},

{
    name: "Anat",
    age: 22,
},

{
    name: "Jonny",
    age: 32,

},

];

function TotalAge(value){
     var total=0;

     value.forEach( element => {
        total = total + element.age;
     });

     return total;
};

//for(let i = 0; i <= people.length; i++) {
//}

console.log(TotalAge(people));
   



