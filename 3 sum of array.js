// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers

function
myFunction(a){

    let total = 0;
  for(let value of a){
    total +=value;
  }
  
  return total;
myFunction([1,2,3,4]);
}
