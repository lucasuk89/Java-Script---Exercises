function greaterThan50(number){
    if ( number > 50){
        return "Correct!";
    }
    
    if(number <= 0){
        return "";
    }

    if(number <= 50){
        return "Incorrect!";
    }
}
console.log(greaterThan50(1));
 
