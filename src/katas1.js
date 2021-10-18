function oneThroughTwenty() {
    /* Your code goes below
    Write a for or a while loop
    return the result*/
    let array = [];
    for(let i=1;i<=20; i++){
      array.push(i)
    }
    return array;
}
//console.log(oneThroughTwenty());

//call function oneThroughTwenty

function evensToTwenty() {
    /* Your code goes below
    Write a for or a while loop
    return the result */
    let a = []
    for(let i=0;i<=20; i+=2){
      a.push(i);
    }
    return a;
}
//console.log(evensToTwenty());

//call function evensToTwenty

function oddsToTwenty() {
    /* Your code goes below
    Write a for or a while loop
    return the result */
  let a=[]
  
  for(let i=1;i<=20; i+=2){
    a.push(i);
  }
  return a;
}
//console.log(oddsToTwenty());
//oddsToTwenty()

//call function oddsToTwenty

function multiplesOfFive() {
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let a = []
  let i=5;
  while(i<=100){
    a.push(i);
    i+=5;
  }
  return a;
}
//console.log(multiplesOfFive());
//call function multiplesOfFive

function squareNumbers() {
  /* Your code goes below
  Write a for or a while loop
  return the result */
  
  let a = []
  for(let i=1; i<=100; i++){
    let perfeito = i*i;
    if(perfeito<=100){
      a.push(perfeito)
    }
  }
  return a;
}
//console.log(squareNumbers())

//call function squareNumbers

function countingBackwards() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let a =[]
  for(let i=20; i>=1;i--){
    a.push(i);
  }
  return a;
}
//console.log(countingBackwards());

//call function countingBackwards

function evenNumbersBackwards() {
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let a =[];
  for (let index = 20; index >= 1; index-=2) {
    a.push(index)
  }
  return a;
}
//console.log(evenNumbersBackwards());
//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let ar = []

  let i = 20;
  i--
  while(i>=1){
    ar.push(i);
    i-=2;
  }
  return ar;
}
//console.log(oddNumbersBackwards());
//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let array = []
  for(let i=100;i>=1; i-=5){
    array.push(i)
  }
  return array
}
//console.log(multiplesOfFiveBackwards());
//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */
  let a =[]

  for(let i=100; i>=1; i--){
    let perfeito = i*i;
    if(perfeito<=100){
      a.push(perfeito)
    }
  }
  return a;
}
console.log(squareNumbersBackwards())
//call function squareNumbersBackwards
