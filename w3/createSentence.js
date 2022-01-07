const person ={
   name: "Lucas",
   age:  32,
   job: "Software Eng.",
};

const personTwo = {
    name: "Thiago",
    age: 30,
    job: "Software Eng. 2"
}

function createSentence({name, age, job}){
    //const {name, age, job} = person;
    return  "Hello my name is " + name +  ", I am " + age + " and I am a " + job;
};

 console.log(createSentence(person));
 console.log(createSentence(personTwo));
