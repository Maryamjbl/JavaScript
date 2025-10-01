function printFact(n){
    let fact = 1;
    for(let i = 1; i<=n; i++){
        fact = fact * i;
    }
    console.log("Fact of " + n + " is " + fact );
    
}
printFact(4)